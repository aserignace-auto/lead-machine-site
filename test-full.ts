import { chromium } from '@playwright/test';

const BASE = 'https://lead-machine-site-nu.vercel.app';
const DIR = 'C:/Users/aseri/Desktop/site-tests';

let ok = 0, fail = 0;
function pass(t: string) { ok++; console.log(`  [OK] ${t}`); }
function err(t: string, d: string) { fail++; console.log(`  [FAIL] ${t} — ${d}`); }

(async () => {
  const fs = require('fs');
  if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });

  // ===== MOBILE TESTS =====
  console.log('\n' + '='.repeat(60));
  console.log('MOBILE TESTS (iPhone 375x812)');
  console.log('='.repeat(60));

  const mobile = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const mp = await mobile.newPage();

  // Test each page on mobile
  for (const { path, name } of [
    { path: '/', name: 'accueil' },
    { path: '/immobilier', name: 'immobilier' },
    { path: '/rdv', name: 'rdv' },
    { path: '/recrutement', name: 'recrutement' },
    { path: '/a-propos', name: 'a-propos' },
    { path: '/mentions-legales', name: 'mentions' },
  ]) {
    console.log(`\n--- Mobile: ${name} ---`);
    await mp.goto(`${BASE}${path}`, { waitUntil: 'networkidle', timeout: 30000 });

    // No overflow
    const overflow = await mp.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    overflow ? err(`${name} overflow`, 'horizontal scroll detected') : pass(`${name} no overflow`);

    // All text >= 12px
    const small = await mp.evaluate(() => {
      let c = 0;
      document.querySelectorAll('p,span,li,a,button,label,div,h1,h2,h3,h4,td,th').forEach(el => {
        const s = window.getComputedStyle(el);
        if (parseFloat(s.fontSize) < 12 && el.textContent!.trim().length > 0 && s.display !== 'none' && s.visibility !== 'hidden') c++;
      });
      return c;
    });
    small > 0 ? err(`${name} text size`, `${small} elements < 12px`) : pass(`${name} text readable`);

    // Screenshot
    await mp.screenshot({ path: `${DIR}/m-${name}.png`, fullPage: true });
    pass(`${name} screenshot`);
  }

  // MOBILE MENU TEST (all scroll positions)
  console.log('\n--- Mobile: HAMBURGER MENU ---');
  await mp.goto(`${BASE}/`, { waitUntil: 'networkidle', timeout: 30000 });

  for (const { scroll, label } of [
    { scroll: 0, label: 'top' },
    { scroll: 500, label: 'mid' },
    { scroll: 99999, label: 'bottom' },
  ]) {
    await mp.evaluate((s) => window.scrollTo(0, s), scroll);
    await mp.waitForTimeout(300);

    const btn = await mp.$('button[aria-expanded]');
    if (!btn) { err(`menu ${label}`, 'hamburger not found'); continue; }

    await btn.click();
    await mp.waitForTimeout(600);

    // Check all menu links visible
    const menuLinks = await mp.evaluate(() => {
      const overlay = document.querySelector('[class*="fixed"][class*="z-[60]"]') ||
                      document.querySelector('[class*="fixed"][class*="inset-0"]');
      if (!overlay) return [];
      const links = overlay.querySelectorAll('a');
      return Array.from(links).map(a => ({
        text: a.textContent?.trim() || '',
        y: Math.round(a.getBoundingClientRect().y),
        h: Math.round(a.getBoundingClientRect().height),
        inView: a.getBoundingClientRect().y >= 0 && a.getBoundingClientRect().bottom <= 812,
      }));
    });

    if (menuLinks.length >= 5) {
      const allInView = menuLinks.every(l => l.inView);
      if (allInView) {
        pass(`menu @ ${label}: ${menuLinks.length} links, all visible`);
      } else {
        const hidden = menuLinks.filter(l => !l.inView);
        err(`menu @ ${label}`, `${hidden.length} links hidden: ${JSON.stringify(hidden)}`);
      }
    } else {
      err(`menu @ ${label}`, `only ${menuLinks.length} links found`);
    }

    await mp.screenshot({ path: `${DIR}/m-menu-${label}.png` });
    await btn.click();
    await mp.waitForTimeout(400);
  }

  // MOBILE FORM TEST
  console.log('\n--- Mobile: FORMS ---');
  await mp.goto(`${BASE}/#contact`, { waitUntil: 'networkidle', timeout: 30000 });
  await mp.waitForTimeout(1000);
  const form = await mp.$('form');
  form ? pass('contact form found') : err('contact form', 'not found');

  // MOBILE CALENDLY
  await mp.goto(`${BASE}/rdv`, { waitUntil: 'networkidle', timeout: 30000 });
  const iframe = await mp.$('iframe[src*="calendly"]');
  if (iframe) {
    const src = await iframe.getAttribute('src');
    src?.includes('background_color') ? pass('calendly dark theme') : err('calendly', 'no dark theme params');
    const box = await iframe.boundingBox();
    if (box && box.width <= 375) {
      pass(`calendly fits mobile (${Math.round(box.width)}px wide)`);
    } else {
      err('calendly mobile', `width=${box?.width}px overflow`);
    }
  } else {
    err('calendly', 'iframe not found');
  }

  // MOBILE RECRUITMENT SIMULATOR
  await mp.goto(`${BASE}/recrutement`, { waitUntil: 'networkidle', timeout: 30000 });
  const simOverflow = await mp.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  simOverflow ? err('recrutement overflow', 'simulator overflows') : pass('recrutement no overflow');
  await mp.screenshot({ path: `${DIR}/m-recrutement-full.png`, fullPage: true });

  await mobile.close();

  // ===== DESKTOP TESTS =====
  console.log('\n' + '='.repeat(60));
  console.log('DESKTOP TESTS (1440x900)');
  console.log('='.repeat(60));

  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const dp = await desktop.newPage();

  for (const { path, name } of [
    { path: '/', name: 'accueil' },
    { path: '/immobilier', name: 'immobilier' },
    { path: '/rdv', name: 'rdv' },
    { path: '/recrutement', name: 'recrutement' },
    { path: '/a-propos', name: 'a-propos' },
    { path: '/mentions-legales', name: 'mentions' },
  ]) {
    console.log(`\n--- Desktop: ${name} ---`);
    await dp.goto(`${BASE}${path}`, { waitUntil: 'networkidle', timeout: 30000 });

    // No overflow
    const overflow = await dp.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    overflow ? err(`${name} overflow`, 'horizontal scroll') : pass(`${name} no overflow`);

    // All internal links work (no 404)
    const links = await dp.$$eval('a[href^="/"]', els => [...new Set(els.map(e => (e as HTMLAnchorElement).pathname))]);
    for (const link of links) {
      if (link === '#' || link.startsWith('/#')) continue;
      const resp = await dp.goto(`${BASE}${link}`, { timeout: 15000 }).catch(() => null);
      if (resp && resp.status() < 400) {
        pass(`link ${link} (${resp.status()})`);
      } else {
        err(`link ${link}`, `status=${resp?.status() || 'timeout'}`);
      }
    }
    // Go back
    await dp.goto(`${BASE}${path}`, { waitUntil: 'networkidle', timeout: 30000 });

    // Screenshot
    await dp.screenshot({ path: `${DIR}/d-${name}.png`, fullPage: true });
    pass(`${name} screenshot`);
  }

  // DESKTOP NAV LINKS
  console.log('\n--- Desktop: NAV LINKS ---');
  await dp.goto(`${BASE}/`, { waitUntil: 'networkidle', timeout: 30000 });
  const navLinks = await dp.$$eval('nav a', els => els.map(e => ({
    text: e.textContent?.trim(),
    href: (e as HTMLAnchorElement).href,
    visible: e.getBoundingClientRect().height > 0,
  })));
  const visibleNav = navLinks.filter(l => l.visible);
  visibleNav.length >= 4 ? pass(`${visibleNav.length} nav links visible`) : err('nav links', `only ${visibleNav.length}`);

  // SEO
  console.log('\n--- SEO ---');
  await dp.goto(`${BASE}/`, { waitUntil: 'networkidle', timeout: 30000 });
  const title = await dp.title();
  title.length > 10 ? pass(`title: ${title.slice(0, 50)}`) : err('title', 'too short');

  const desc = await dp.$eval('meta[name="description"]', el => el.getAttribute('content')).catch(() => '');
  (desc && desc.length > 30) ? pass(`meta desc (${desc.length}c)`) : err('meta desc', 'missing');

  const og = await dp.$eval('meta[property="og:title"]', el => el.getAttribute('content')).catch(() => '');
  og ? pass('og:title') : err('og:title', 'missing');

  const sm = await dp.goto(`${BASE}/sitemap.xml`, { timeout: 10000 });
  sm?.status() === 200 ? pass('sitemap.xml') : err('sitemap', `${sm?.status()}`);

  const rb = await dp.goto(`${BASE}/robots.txt`, { timeout: 10000 });
  rb?.status() === 200 ? pass('robots.txt') : err('robots', `${rb?.status()}`);

  await desktop.close();
  await browser.close();

  console.log('\n' + '='.repeat(60));
  console.log(`FINAL: ${ok} PASSED / ${fail} FAILED / ${ok + fail} TOTAL`);
  console.log('='.repeat(60));
  if (fail === 0) console.log('\nALL TESTS PASSED!');
  else console.log('\nFIX THE FAILURES ABOVE!');
})();
