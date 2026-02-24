"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL;

type ActionResult =
  | { success: true }
  | { success: false; error: string };

export async function submitContactForm(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  // Honeypot check
  if (formData.get("_gotcha")) {
    // Bot detected — pretend success
    return { success: true };
  }

  // Validation
  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all fields." };
  }

  if (name.length > 100) {
    return { success: false, error: "Name is too long." };
  }

  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (message.length > 10_000) {
    return { success: false, error: "Message is too long." };
  }

  if (!TO_EMAIL) {
    return { success: false, error: "Server configuration error. Please contact support." };
  }

  try {
    const { error } = await resend.emails.send({
      from: "MyntLabs Contact Form <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        ...(phone ? [`Phone: ${phone}`] : []),
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send. Please try again." };
    }

    return { success: true };
  } catch (err) {
    console.error("Contact form error:", err);
    return { success: false, error: "Failed to send. Please try again." };
  }
}
