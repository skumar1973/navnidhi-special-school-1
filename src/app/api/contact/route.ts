
import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

// export const runtime = "nodejs";

type ContactInput = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

function cleanText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactInput;

  try {
    body = (await request.json()) as ContactInput;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot: normal visitors should leave this field empty.
  // A filled field is treated as a bot submission.
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ success: true });
  }

  const name = cleanText(body.name);
  const email = cleanText(body.email).toLowerCase();
  const phone = cleanText(body.phone);
  const subject = cleanText(body.subject);
  const message = cleanText(body.message);

  if (
    name.length < 1 ||
    name.length > 100 ||
    !validEmail(email) ||
    email.length > 254 ||
    phone.length > 30 ||
    subject.length < 1 ||
    subject.length > 100 ||
    message.length < 10 ||
    message.length > 3000
  ) {
    return NextResponse.json(
      { error: "Please check your details and try again." },
      { status: 400 }
    );
  }

  const supabase = createSupabaseServerClient();

  if (!supabase) {
    console.error("Supabase environment variables are missing.");

    return NextResponse.json(
      { error: "The contact service is not configured." },
      { status: 500 }
    );
  }

console.log("Supabase client available:", Boolean(supabase));
console.log(
  "Supabase project URL:",
  process.env.NEXT_PUBLIC_SUPABASE_URL
);

  // Save the enquiry first so a mail failure does not lose the message.
const { error } = await supabase
  .from("contact_messages")
  .insert({
    name,
    email,
    phone: phone || null,
    subject,
    message,
  });

if (error) {
  console.error("Supabase insert error:", JSON.stringify(error, null, 2));
  console.error("Supabase error code:", error.code);
  console.error("Supabase error message:", error.message);
  console.error("Supabase error details:", error.details);
  console.error("Supabase error hint:", error.hint);

  return NextResponse.json(
    { success: false, error: error.message },
    { status: 500 }
  );
}

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error("EmailJS environment variables are missing.");

    // The message is safely saved even though email is not configured.
    return NextResponse.json({
      success: true,
      emailSent: false,
      message:
        "Your enquiry has been saved, but the email notification is not configured.",
    });
  }

  try {
    const emailResponse = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            name,
            email,
            phone: phone || "Not provided",
            subject,
            message,
            created_at: new Date().toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata",
}),
          },
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
      }
    );

    if (!emailResponse.ok) {
      const details = await emailResponse.text();

      console.error("EmailJS failed:", emailResponse.status, details);

      return NextResponse.json({
        success: true,
        emailSent: false,
        message:
          "Your enquiry has been saved, but the email notification could not be sent.",
      });
    }

    return NextResponse.json({
      success: true,
      emailSent: true,
      message: "Thank you! Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("EmailJS request failed:", error);

    return NextResponse.json({
      success: true,
      emailSent: false,
      message:
        "Your enquiry has been saved, but the email notification could not be sent.",
    });
  }
}
