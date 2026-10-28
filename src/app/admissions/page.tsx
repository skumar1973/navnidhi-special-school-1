
import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  ClipboardCheck,
  MessageCircle,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import { createSupabaseServerClient } from "@/lib/supabase/server";

import { Suspense } from "react";
import AdmissionFormSection from "@/app/admissions/admission-form-section";
import AdmissionForm from "@/app/admissions/admission-form";

type Program = {
  id: string;
  title: string;
  slug: string;
  short_description: string | null;
  age_group: string | null;
};

export default function AdmissionsPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf6] text-[#173b38]">
      {/* Hero */}
      <section className="relative border-b border-[#dce8df]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#dcefe3] blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe2d5] bg-white/80 px-4 py-2 text-sm font-medium text-[#39776b]">
              <HeartHandshake className="h-4 w-4" />
              Admissions at Navnidhi Special School
            </span>

            <h1 className="mt-7 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Every journey starts with{" "}
              <span className="font-serif italic text-[#438574]">
                understanding.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#5d716c] sm:text-lg">
              Tell us a little about your child and the program you're
              interested in. Our admissions team can use your enquiry to
              understand what you'd like to know and help you explore the
              next steps.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#admission-form"
                className="inline-flex items-center gap-2 rounded-full bg-[#286b5d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1d554a]"
              >
                Start an enquiry
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/programs"
                className="inline-flex items-center rounded-full border border-[#cbded2] bg-white px-6 py-3.5 text-sm font-semibold text-[#286b5d] transition hover:bg-[#edf5ef]"
              >
                Explore programs
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white bg-white/80 p-4 shadow-[0_24px_80px_-32px_rgba(31,86,71,0.28)] sm:p-6">
            <div className="rounded-[1.5rem] bg-[#eaf3e9] p-7 sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#438574]">
                <ClipboardCheck className="h-7 w-7" />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#638479]">
                Your first steps
              </p>

              <h2 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl">
                A clear starting point for your family.
              </h2>

              <div className="mt-7 space-y-5">
                {[
                  {
                    icon: MessageCircle,
                    title: "Tell us what you need",
                    text: "Share your enquiry and contact details.",
                  },
                  {
                    icon: BookOpen,
                    title: "Choose a program",
                    text: "Select a program listed by the school.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Take the next step",
                    text: "Contact the school to discuss the admission process.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#438574]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#315d51]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-[#657770]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Place this where your admission form currently appears. */}
      <section id="admission-form">
        <div className="mx-auto w-full max-w-7xl px-6 py-16">
          <Suspense
            fallback={
              <p className="text-sm text-[#657770]">
                Loading admission form...
              </p>
            }
          >
            <AdmissionFormSection />
          </Suspense>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#173f38] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_auto] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a9d3b7]">
              What happens next?
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Your enquiry is the beginning, not a confirmation of admission.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-[#c5d9cf]">
              After submitting the form, your details will be saved for the
              school to review. The admission process, eligibility,
              availability, and next steps should be confirmed directly
              with the school.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f3e9d4] px-6 py-3.5 text-sm font-semibold text-[#24564b] transition hover:bg-white"
          >
            General contact
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
