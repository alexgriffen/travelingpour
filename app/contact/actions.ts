"use server";

import { Resend } from "resend";
import { siteConfig } from "@/lib/content";

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
  // Honeypot — a hidden field real users never fill. If it's populated,
  // the submission is almost certainly a bot.
  website?: string;
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
  // Honeypot: real users never see or fill the `website` field, so anything
  // here is a bot. Pretend success and send nothing — don't tip off the bot,
  // don't email anyone.
  if (data.website && data.website.trim() !== "") {
    return { success: true };
  }

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
  } catch (err) {
    console.error("Unexpected error sending inquiry:", err);
    return {
      success: false,
      error: "Something went wrong. Please try again or email us directly.",
    };
  }

  // Send a confirmation auto-reply to the person who submitted the form.
  // This is best-effort: the inquiry already reached our inbox above, so a
  // failure here shouldn't surface as an error to the user.
  try {
    await resend.emails.send({
      from,
      to: email,
      replyTo: to,
      subject: `Thanks for your inquiry — ${siteConfig.name}`,
      html: confirmationHtml(name, data),
    });
  } catch (err) {
    console.error("Failed to send confirmation auto-reply:", err);
  }

  return { success: true };
}

function confirmationHtml(name: string, data: InquiryData): string {
  const recap: [string, string][] = [
    ["Event Type", data.eventType || "—"],
    ["Event Date", data.eventDate || "—"],
    ["Location", data.location || "—"],
    ["Guest Count", data.guestCount || "—"],
  ];

  const recapRows = recap
    .filter(([, value]) => value !== "—")
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px;font-weight:600;color:#0F1923;">${label}</td><td style="padding:4px 12px;color:#1C2B38;">${escapeHtml(
          value,
        )}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;background:#0F1923;border-radius:12px;overflow:hidden;">
      <div style="padding:32px 28px;">
        <h1 style="color:#C9A84C;font-size:24px;margin:0 0 4px;">${siteConfig.name}</h1>
        <p style="color:#9AA8B2;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin:0 0 24px;">Inquiry Received</p>

        <p style="color:#F5F0E8;font-size:16px;line-height:1.6;margin:0 0 16px;">Hi ${escapeHtml(
          name,
        )},</p>
        <p style="color:#F5F0E8;font-size:16px;line-height:1.6;margin:0 0 16px;">
          Thanks for reaching out to ${siteConfig.name}! We've received your inquiry and we'll check availability and get back to you within 24 hours.
        </p>

        ${
          recapRows
            ? `<p style="color:#9AA8B2;font-size:13px;text-transform:uppercase;letter-spacing:1px;margin:24px 0 8px;">Your Request</p>
        <table style="border-collapse:collapse;width:100%;background:#F5F0E8;border-radius:8px;">${recapRows}</table>`
            : ""
        }

        <p style="color:#F5F0E8;font-size:16px;line-height:1.6;margin:24px 0 16px;">
          In the meantime, if you have any questions, just reply to this email or call us at ${siteConfig.phone}.
        </p>

        <p style="color:#F5F0E8;font-size:16px;line-height:1.6;margin:0;">
          Cheers,<br/>The ${siteConfig.name} Team
        </p>

        <p style="color:#9AA8B2;font-size:12px;margin:28px 0 0;border-top:1px solid #1C2B38;padding-top:16px;">
          ${siteConfig.name} · ${siteConfig.location}<br/>
          ${siteConfig.email} · ${siteConfig.instagramHandle}
        </p>
      </div>
    </div>
  `;
}
