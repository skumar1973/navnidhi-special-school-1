
"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { supabase } from "@/lib/supabase/client";

type FormStatus = {
  type: "success" | "error";
  message: string;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || "").trim(),
    };

    try {
      // Honeypot spam protection.
      // If a bot fills this field, do not save or send the enquiry.
      if (payload.website) {
        form.reset();
        setStatus({
          type: "success",
          message:
            "Thank you! Your enquiry has been submitted successfully.",
        });
        return;
      }

      // Save enquiry directly to Supabase.
      const { error: supabaseError } = await supabase
        .from("contact_messages")
        .insert({
          name: payload.name,
          email: payload.email,
          phone: payload.phone || null,
          subject: payload.subject,
          message: payload.message,
        });

      if (supabaseError) {
        console.error("Supabase error:", supabaseError.message);
        throw new Error(
          "Unable to save your enquiry. Please try again."
        );
      }

      // Send notification email using EmailJS.
      // A failed email must not make the user submit the enquiry again.
      try {
        const serviceId =
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId =
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey =
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
          throw new Error("EmailJS environment variables are missing.");
        }

        await emailjs.send(
          serviceId,
          templateId,
          {
            name: payload.name,
            email: payload.email,
            phone: payload.phone || "Not provided",
            subject: payload.subject,
            message: payload.message,
            created_at: new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
            }),
          },
          {
            publicKey,
          }
        );

        setStatus({
          type: "success",
          message:
            "Thank you! Your enquiry has been submitted successfully. We will contact you soon.",
        });
      } catch (emailError) {
        console.error("EmailJS error:", emailError);

        setStatus({
          type: "success",
          message:
            "Your enquiry has been saved successfully. However, email notification could not be sent. Our team will review your enquiry.",
        });
      }

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-[#E0E8DE] bg-white p-6 shadow-sm sm:p-9"
    >
      <p className="mb-6 text-sm text-[#8A9A91]">
        Fields marked with * are required.
      </p>

      {/* Honeypot anti-spam field */}
      <div
        aria-hidden="true"
        className="absolute -left-[10000px] h-px w-px overflow-hidden"
      >
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Your name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-[#DCE5DB] bg-[#FFFCF8] px-4 py-3 text-sm outline-none placeholder:text-[#9AA79F] focus:border-[#176B60] focus:ring-2 focus:ring-[#176B60]/10"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-[#DCE5DB] bg-[#FFFCF8] px-4 py-3 text-sm outline-none placeholder:text-[#9AA79F] focus:border-[#176B60] focus:ring-2 focus:ring-[#176B60]/10"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="phone" className="mb-2 block text-sm font-medium">
          Phone number (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={30}
          placeholder="Your contact number"
          className="w-full rounded-xl border border-[#DCE5DB] bg-[#FFFCF8] px-4 py-3 text-sm outline-none placeholder:text-[#9AA79F] focus:border-[#176B60] focus:ring-2 focus:ring-[#176B60]/10"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="mb-2 block text-sm font-medium">
          What would you like to know? *
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className="w-full rounded-xl border border-[#DCE5DB] bg-[#FFFCF8] px-4 py-3 text-sm outline-none focus:border-[#176B60] focus:ring-2 focus:ring-[#176B60]/10"
        >
          <option value="" disabled>
            Select an enquiry topic
          </option>
          <option value="Admissions">Admissions</option>
          <option value="Programs">Our programs</option>
          <option value="School visit">Arrange a school visit</option>
          <option value="General enquiry">General enquiry</option>
          <option value="Other">Something else</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Your message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={5}
          placeholder="Tell us how we can help..."
          className="w-full resize-y rounded-xl border border-[#DCE5DB] bg-[#FFFCF8] px-4 py-3 text-sm outline-none placeholder:text-[#9AA79F] focus:border-[#176B60] focus:ring-2 focus:ring-[#176B60]/10"
        />
      </div>

      {status && (
        <p
          role="status"
          aria-live="polite"
          className={`mt-5 rounded-xl p-4 text-sm leading-6 ${
            status.type === "success"
              ? "bg-[#E4F1E8] text-[#175D52]"
              : "bg-red-50 text-red-700"
          }`}
        >
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#176B60] px-6 py-3.5 font-medium text-white transition hover:bg-[#12564D] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <Send className="h-4 w-4" />
        {loading ? "Submitting..." : "Send message"}
      </button>

      <p className="mt-4 text-xs leading-5 text-[#8A9A91]">
        Please avoid including sensitive medical or personal information in
        this form.
      </p>
    </form>
  );
}
