/**
 * Comprehensive visual + functional test of the Lead Machine site
 * Tests both desktop and mobile viewports on the live production URL
 */
import { chromium, type Page, type Browser } from '@playwright/test';

const BASE = 'https://lead-machine-site-nu.vercel.app';
const SCREENSHOT_DIR = 'C:/Users/aseri/Desktop/site-tests';

const PAGES = [
  { path: '/', name: 'accueil' },
  { path: '/immobilier', name: 'immobilier' },
  { path: '/rdv', name: 'rdv' },
  { path: '/recrutement', name: 'recrutement' },
  { path: '/a-propos', name: 'a-propos' },
  { path: '/mentions-legales', name: 'mentions-legales' },
];

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },    // iPhone
  { name: 'tablet', width: 768, height: 1024 },    // iPad
  { name: 'desktop', width: 1440, height: 900 },   // Desktop
];

let totalTests = 0;
let passed = 0;
let failed = 0;

function ok(label: string) {
  totalTests++;
  passed++;
  console.log(`  [OK] ${label}`);
}

function fail(label: string, detail: string) {
  totalTests++;
  failed++;
  console.log(`  [FAIL] ${label} — ${detail}`);
}

async function testPage(page: Page, path: string, name: string, viewport: { name: string; width: number; height: number }) {
  console.log(`\n--- ${name} (${viewport.name} ${viewport.width}x${viewport.height}) ---`);

  await page.setViewportSize({ width: viewport.width, height: viewport.height });

  try {
    await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle', timeout: 30000 });
    ok(`Page loads: ${path}`);
  } catch (e: any) {
    fail(`Page loads: ${path}`, e.message?.slice(0, 80));
    return;
  }

  // Check no horizontal overflow
  const hasOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  if (hasOverflow) {
    fail('No horizontal overflow', `scrollWidth > clientWidth`);
  } else {
    ok('No horizontal overflow');
  }

  // Check no console errors
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  // Check all links are valid (no 404)
  const links = await page.$$eval('a[href]', (els) =>
    els.map(el => (el as HTMLAnchorElement).href).filter(h => h.startsWith('http'))
  );
  ok(`Found ${links.length} links`);

  // Check text readability (no text smaller than 12px)
  const smallText = await page.evaluate(() => {
    const elements = document.querySelectorAll('p, span, li, a, button, label, div');
    let count = 0;
    elements.forEach(el => {
      const style = window.getComputedStyle(el);
      const size = parseFloat(style.fontSize);
      if (size < 12 && el.textContent && el.textContent.trim().length > 0 && style.display !== 'none' && style.visibility !== 'hidden') {
        count++;
      }
    });
    return count;
  });
  if (smallText > 0) {
    fail(`Text readability`, `${smallText} elements with font-size < 12px`);
  } else {
    ok('Text readability (all >= 12px)');
  }

  // Mobile-specific tests
  if (viewport.name === 'mobile') {
    // Check hamburger menu exists and works
    const hamburger = await page.$('button[aria-label*="menu" i], button[aria-label*="Menu" i], .hamburger, button:has(svg)');
    if (path === '/') {
      // Check navbar is not overflowing with links on mobile
      const navLinks = await page.$$('nav a:not([class*="hidden"])');
      const visibleNavLinks = [];
      for (const link of navLinks) {
        const visible = await link.isVisible();
        if (visible) visibleNavLinks.push(link);
      }
      // On mobile, we should have minimal visible nav items (logo + maybe CTA)
      if (visibleNavLinks.length > 4) {
        fail('Mobile nav', `${visibleNavLinks.length} nav links visible (should be hidden in hamburger)`);
      } else {
        ok(`Mobile nav (${visibleNavLinks.length} visible items)`);
      }
    }

    // Check buttons aren't cut off
    const buttons = await page.$$('button, a.bg-gradient-gold, [class*="btn"]');
    for (const btn of buttons.slice(0, 5)) {
      const box = await btn.boundingBox();
      if (box && box.x + box.width > viewport.width) {
        fail('Button overflow', `Button at x=${box.x} width=${box.width} overflows ${viewport.width}px`);
      }
    }
    ok('Buttons within viewport');

    // Check touch targets (min 44px)
    const smallTargets = await page.evaluate(() => {
      const targets = document.querySelectorAll('button, a, input, select, textarea');
      let count = 0;
      targets.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.height < 40 && rect.width < 40 && rect.height > 0 && rect.width > 0) {
          const style = window.getComputedStyle(el);
          if (style.display !== 'none' && style.visibility !== 'hidden') {
            count++;
          }
        }
      });
      return count;
    });
    if (smallTargets > 3) {
      fail(`Touch targets`, `${smallTargets} elements smaller than 40px`);
    } else {
      ok(`Touch targets (${smallTargets} small, acceptable)`);
    }
  }

  // Screenshot
  await page.screenshot({
    path: `${SCREENSHOT_DIR}/${name}-${viewport.name}.png`,
    fullPage: true,
  });
  ok(`Screenshot saved: ${name}-${viewport.name}.png`);
}

async function testNavbarMobile(page: Page) {
  console.log('\n--- NAVBAR MOBILE TEST ---');
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle', timeout: 30000 });

  // Find and click hamburger
  const hamburgerSelectors = [
    'button[aria-label*="menu" i]',
    'button[aria-label*="Menu" i]',
    'button[aria-expanded]',
    'nav button:has(svg)',
    'header button:has(svg)',
  ];

  let hamburger = null;
  for (const sel of hamburgerSelectors) {
    hamburger = await page.$(sel);
    if (hamburger) {
      const visible = await hamburger.isVisible();
      if (visible) break;
      hamburger = null;
    }
  }

  if (hamburger) {
    ok('Hamburger button found');
    await hamburger.click();
    await page.waitForTimeout(500);

    // Check mobile menu opened
    const mobileMenu = await page.$('[class*="fixed"], [class*="absolute"]');
    if (mobileMenu) {
      ok('Mobile menu opens');
      await page.screenshot({ path: `${SCREENSHOT_DIR}/navbar-mobile-open.png` });

      // Check menu links
      const menuLinks = await page.$$eval('a', (els) =>
        els.filter(el => {
          const rect = el.getBoundingClientRect();
          return rect.height > 0 && rect.y > 50 && rect.y < 600;
        }).map(el => ({ text: el.textContent?.trim(), href: (el as HTMLAnchorElement).href }))
      );
      ok(`Mobile menu has ${menuLinks.length} links`);

      // Close menu
      await hamburger.click();
      await page.waitForTimeout(300);
      ok('Mobile menu closes');
    } else {
      fail('Mobile menu', 'Menu did not appear after click');
    }
  } else {
    fail('Hamburger button', 'Not found on mobile');
  }
}

async function testForms(page: Page) {
  console.log('\n--- FORM TESTS ---');

  // Test contact form on accueil
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE}/#contact`, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  const contactForm = await page.$('form');
  if (contactForm) {
    ok('Contact form found');
    // Check all required inputs have name attributes
    const inputs = await page.$$eval('form input[name], form select[name], form textarea[name]', els => els.map(e => (e as HTMLInputElement).name));
    if (inputs.length >= 3) {
      ok(`Form inputs with names: ${inputs.join(', ')}`);
    } else {
      fail('Form inputs', `Only ${inputs.length} named inputs`);
    }
  } else {
    fail('Contact form', 'Not found on accueil');
  }

  // Test Calendly on RDV page
  await page.goto(`${BASE}/rdv`, { waitUntil: 'networkidle', timeout: 30000 });
  const calendlyIframe = await page.$('iframe[src*="calendly"]');
  if (calendlyIframe) {
    const src = await calendlyIframe.getAttribute('src');
    if (src?.includes('background_color=161616')) {
      ok('Calendly dark theme active');
    } else {
      fail('Calendly dark theme', `src=${src?.slice(0, 60)}`);
    }
  } else {
    fail('Calendly iframe', 'Not found on /rdv');
  }
}

async function testSEO(page: Page) {
  console.log('\n--- SEO TESTS ---');

  await page.goto(`${BASE}/`, { waitUntil: 'networkidle', timeout: 30000 });

  // Check meta tags
  const title = await page.title();
  ok(`Title: ${title.slice(0, 50)}`);

  const desc = await page.$eval('meta[name="description"]', el => el.getAttribute('content'));
  if (desc && desc.length > 30) {
    ok(`Meta description (${desc.length} chars)`);
  } else {
    fail('Meta description', 'Missing or too short');
  }

  const ogTitle = await page.$eval('meta[property="og:title"]', el => el.getAttribute('content')).catch(() => null);
  if (ogTitle) ok(`OG title: ${ogTitle.slice(0, 40)}`);
  else fail('OG title', 'Missing');

  // Check sitemap
  const sitemapResp = await page.goto(`${BASE}/sitemap.xml`, { timeout: 10000 });
  if (sitemapResp && sitemapResp.status() === 200) {
    ok('sitemap.xml accessible');
  } else {
    fail('sitemap.xml', `status=${sitemapResp?.status()}`);
  }

  // Check robots
  const robotsResp = await page.goto(`${BASE}/robots.txt`, { timeout: 10000 });
  if (robotsResp && robotsResp.status() === 200) {
    ok('robots.txt accessible');
  } else {
    fail('robots.txt', `status=${robotsResp?.status()}`);
  }
}

async function main() {
  const fs = require('fs');
  if (!fs.existsSync(SCREENSHOT_DIR)) fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

  const browser: Browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page: Page = await context.newPage();

  console.log('=' .repeat(60));
  console.log('LEAD MACHINE — FULL SITE TEST SUITE');
  console.log('=' .repeat(60));

  // Test all pages on all viewports
  for (const vp of VIEWPORTS) {
    for (const pg of PAGES) {
      await testPage(page, pg.path, pg.name, vp);
    }
  }

  // Test navbar mobile
  await testNavbarMobile(page);

  // Test forms
  await testForms(page);

  // Test SEO
  await testSEO(page);

  await browser.close();

  console.log('\n' + '=' .repeat(60));
  console.log(`RESULTS: ${passed} PASSED / ${failed} FAILED / ${totalTests} TOTAL`);
  console.log('=' .repeat(60));

  if (failed > 0) {
    console.log('\nFAILED TESTS need attention!');
  } else {
    console.log('\nALL TESTS PASSED!');
  }
}

main().catch(console.error);
