import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { type, ...fields } = data;

    console.log(`[LEAD] ${type}:`, JSON.stringify(fields));

    // 1. Send to n8n webhook if configured
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, ...fields, timestamp: new Date().toISOString() }),
      }).catch((err) => console.error("[N8N WEBHOOK]", err));
    }

    // 2. Send notification email via Gmail
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const notifyTo = process.env.NOTIFY_EMAIL || gmailUser;

    if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: { user: gmailUser, pass: gmailPass },
      });

      const fieldRows = Object.entries(fields)
        .map(([k, v]) => `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">${k}</td><td style="padding:8px;border:1px solid #ddd">${v}</td></tr>`)
        .join("");

      const subjectMap: Record<string, string> = {
        contact: "Nouveau lead - Demande de demo",
        rdv: "Nouveau RDV - Reservation decouverte",
        recrutement: "Nouvelle candidature",
      };

      await transporter.sendMail({
        from: gmailUser,
        to: notifyTo,
        subject: `[Lead Machine] ${subjectMap[type] || type}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px">
            <h2 style="color:#C9A84C">Lead Machine - ${subjectMap[type] || type}</h2>
            <p>Nouvelle soumission du site web :</p>
            <table style="border-collapse:collapse;width:100%">${fieldRows}</table>
            <p style="color:#888;font-size:12px;margin-top:20px">
              Recu le ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}
            </p>
          </div>
        `,
      });

      console.log(`[EMAIL] Notification envoyee a ${notifyTo}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[CONTACT API]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
