"use server";

import { Resend } from "resend";
import { siteConfig } from "@/lib/content";

export type NotifyState = { success: boolean; error?: string };

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Server action for the "notify me at launch" form on the coming-soon page.
// Signature matches React's useActionState: (prevState, formData) => newState.
export async function subscribe(
  _prev: NotifyState,
  formData: FormData,
): Promise<NotifyState> {
  // Honeypot: real users never see or fill the `website` field, so anything
  // here is a bot. Pretend success and send nothing.
  const honeypot = (formData.get("website") as string | null)?.trim();
  if (honeypot) {
    return { success: true };
  }

  const email = (formData.get("email") as string | null)?.trim();

  if (!email) {
    return { success: false, error: "Please enter your email." };
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error(
      "Resend env vars missing: RESEND_API_KEY / INQUIRY_TO_EMAIL / INQUIRY_FROM_EMAIL",
    );
    return {
      success: false,
      error: "We couldn't sign you up right now. Please try again later.",
    };
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New launch signup — ${email}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#0F1923;">New Launch Notification Signup</h2>
          <p style="color:#1C2B38;font-size:16px;">
            <strong>${escapeHtml(email)}</strong> wants to be notified when
            ${siteConfig.name} launches.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend send error:", error);
      return {
        success: false,
        error: "We couldn't sign you up right now. Please try again later.",
      };
    }
  } catch (err) {
    console.error("Unexpected error saving signup:", err);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }

  // Best-effort confirmation to the subscriber. A failure here shouldn't
  // surface as an error — we already captured their signup above.
  try {
    await resend.emails.send({
      from,
      to: email,
      replyTo: to,
      subject: `You're on the list — ${siteConfig.name}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;background:#0F1923;border-radius:12px;overflow:hidden;">
          <div style="padding:32px 28px;">
            <h1 style="color:#C9A84C;font-size:24px;margin:0 0 4px;">${siteConfig.name}</h1>
            <p style="color:#9AA8B2;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin:0 0 24px;">You're on the list</p>
            <p style="color:#F5F0E8;font-size:16px;line-height:1.6;margin:0 0 16px;">
              Thanks for your interest in ${siteConfig.name}! We're putting the
              finishing touches on our mobile bar experience for the ${siteConfig.location}.
            </p>
            <p style="color:#F5F0E8;font-size:16px;line-height:1.6;margin:0 0 16px;">
              You'll be one of the first to know the moment we're open for bookings.
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
      `,
    });
  } catch (err) {
    console.error("Failed to send signup confirmation:", err);
  }

  return { success: true };
}
