"use server";

import { Resend } from "resend";

export type InquiryData = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  guestCount: string;
  referral: string;
  message: string;
};

export type InquiryResult = { success: boolean; error?: string };

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendInquiry(data: InquiryData): Promise<InquiryResult> {
  // Basic server-side validation — Server Actions are reachable via direct POST,
  // so never trust the client to have validated.
  const name = data.name?.trim();
  const email = data.email?.trim();

  if (!name || !email) {
    return { success: false, error: "Name and email are required." };
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Resend env vars missing: RESEND_API_KEY / INQUIRY_TO_EMAIL / INQUIRY_FROM_EMAIL");
    return {
      success: false,
      error: "We couldn't send your inquiry right now. Please email us directly.",
    };
  }

  const resend = new Resend(apiKey);

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", data.phone || "—"],
    ["Event Type", data.eventType || "—"],
    ["Event Date", data.eventDate || "—"],
    ["Location", data.location || "—"],
    ["Guest Count", data.guestCount || "—"],
    ["Heard About Us", data.referral || "—"],
  ];

  const detailRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#0F1923;">${label}</td><td style="padding:6px 12px;color:#1C2B38;">${escapeHtml(
          value,
        )}</td></tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#0F1923;">New Booking Inquiry</h2>
      <table style="border-collapse:collapse;width:100%;background:#F5F0E8;border-radius:8px;">
        ${detailRows}
      </table>
      <h3 style="color:#0F1923;margin-top:24px;">Message</h3>
      <p style="color:#1C2B38;white-space:pre-wrap;">${
        data.message ? escapeHtml(data.message) : "—"
      }</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New Inquiry — ${name}${data.eventType ? ` (${data.eventType})` : ""}`,
      html,
    });

    if (error) {
      console.error("Resend send error:", error);
      return {
        success: false,
        error: "We couldn't send your inquiry right now. Please email us directly.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error sending inquiry:", err);
    return {
      success: false,
      error: "Something went wrong. Please try again or email us directly.",
    };
  }
}
