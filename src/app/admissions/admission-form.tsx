
"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, type FormEvent } from "react";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

type Program = {
  id: string;
  title: string;
  slug: string;
  short_description: string | null;
  age_group: string | null;
};

export default function AdmissionForm({
  programs,
}: {
  programs: Program[];
}) {
  const searchParams = useSearchParams();
  const requestedSlug = searchParams.get("program") ?? "";

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");

  useEffect(() => {
    const matchingProgram = programs.find(
      (program) => program.slug === requestedSlug
    );

    setSelectedProgram(matchingProgram?.id ?? "");
  }, [requestedSlug, programs]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setSuccess("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      child_name: String(formData.get("child_name") ?? "").trim(),
      parent_name: String(formData.get("parent_name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      program_id: selectedProgram,
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      // Basic validation
      if (!payload.program_id) {
        throw new Error("Please select a program.");
      }

      if (
        !payload.child_name ||
        !payload.parent_name ||
        !payload.email ||
        !payload.phone
      ) {
        throw new Error("Please complete all required fields.");
      }

      // Verify that the selected program is still active.
      const { data: activeProgram, error: programError } =
        await supabase
          .from("programs")
          .select("id")
          .eq("id", payload.program_id)
          .eq("is_active", true)
          .maybeSingle();

      if (programError) {
        console.error("Program verification error:", programError.message);
        throw new Error(
          "Unable to verify the selected program. Please try again."
        );
      }

      if (!activeProgram) {
        throw new Error(
          "This program is currently unavailable. Please select another program."
        );
      }

      // Insert admission enquiry directly into Supabase.
      const { error: insertError } = await supabase
        .from("admission_enquries")
        .insert({
          child_name: payload.child_name,
          parent_name: payload.parent_name,
          email: payload.email,
          phone: payload.phone,
          program_id: payload.program_id,
          message: payload.message || null,
        });

      if (insertError) {
        console.error("Admission enquiry error:", insertError.message);

        throw new Error(
          "Unable to submit your admission enquiry. Please try again."
        );
      }

      setSuccess(
        "Thank you! Your admission enquiry has been submitted successfully. Our team will contact you soon."
      );

      form.reset();
      setSelectedProgram("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#dce6dc] bg-white px-4 py-3 text-sm text-[#173b38] outline-none transition placeholder:text-[#91a29a] focus:border-[#438574] focus:ring-2 focus:ring-[#438574]/15";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="child_name"
            className="text-sm font-semibold text-[#244b42]"
          >
            Child's full name *
          </label>
          <input
            id="child_name"
            name="child_name"
            required
            maxLength={100}
            autoComplete="off"
            className={inputClass}
            placeholder="Enter child's name"
          />
        </div>

        <div>
          <label
            htmlFor="parent_name"
            className="text-sm font-semibold text-[#244b42]"
          >
            Parent / guardian name *
          </label>
          <input
            id="parent_name"
            name="parent_name"
            required
            maxLength={100}
            autoComplete="name"
            className={inputClass}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm font-semibold text-[#244b42]"
          >
            Email address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-[#244b42]"
          >
            Contact number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            minLength={7}
            maxLength={30}
            autoComplete="tel"
            className={inputClass}
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="program_id"
          className="text-sm font-semibold text-[#244b42]"
        >
          Program of interest *
        </label>

        <select
          id="program_id"
          name="program_id"
          required
          value={selectedProgram}
          onChange={(event) => setSelectedProgram(event.target.value)}
          className={inputClass}
        >
          <option value="">Select a program</option>

          {programs.map((program) => (
            <option key={program.id} value={program.id}>
              {program.title}
              {program.age_group ? ` — ${program.age_group}` : ""}
            </option>
          ))}
        </select>

        {programs.length === 0 && (
          <p className="mt-2 text-sm text-[#8a7048]">
            No programs are currently available to select. Please contact
            the school directly.
          </p>
        )}

        {selectedProgram && (
          <p className="mt-2 text-sm leading-6 text-[#657770]">
            {programs.find((p) => p.id === selectedProgram)
              ?.short_description ?? ""}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-sm font-semibold text-[#244b42]"
        >
          Anything you'd like us to know? (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={3000}
          className={inputClass}
          placeholder="Share your questions or tell us what you'd like to discuss."
        />
        <p className="mt-2 text-xs leading-5 text-[#788981]">
          Please don't include sensitive medical records or other
          confidential documents in this message.
        </p>
      </div>

      {success && (
        <div
          role="status"
          aria-live="polite"
          className="flex gap-3 rounded-xl border border-[#cce4d1] bg-[#edf7ee] p-4 text-sm leading-6 text-[#286b5d]"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
          {success}
        </div>
      )}

      {error && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting || programs.length === 0}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#286b5d] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1d554a] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" />
            Submitting enquiry...
          </>
        ) : (
          <>
            Submit admission enquiry
            <Send className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="text-xs leading-6 text-[#788981]">
        Submitting this form sends an admission enquiry to the school.
        It does not confirm admission or guarantee a place.
      </p>
    </form>
  );
}
