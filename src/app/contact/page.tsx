
import Link from "next/link";
import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  MessageCircle,
  ArrowRight,
  Send,
} from "lucide-react";

import { schoolConfig } from "@/lib/school-config";
import ContactForm from "@/app/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Navnidhi Special School",
  description:
    "Contact Navnidhi Special School to learn about our programs, admissions, and how we support every child's learning journey.",
};

const contactItems = [
  {
    title: "Visit our school",
    value: schoolConfig.contact.address,
    icon: MapPin,
    href: "",
  },
  {
    title: "Call us",
    value: schoolConfig.contact.phone,
    icon: Phone,
    href: schoolConfig.contact.phone
      ? `tel:${schoolConfig.contact.phone}`
      : "",
  },
  {
    title: "Email us",
    value: schoolConfig.contact.email,
    icon: Mail,
    href: schoolConfig.contact.email
      ? `mailto:${schoolConfig.contact.email}`
      : "",
  },
  {
    title: "Opening hours",
    value: schoolConfig.contact.openingHours,
    icon: Clock,
    href: "",
  },
];

export default function ContactPage() {
  return (
    <div className="overflow-hidden bg-[#FFFCF5] text-[#173F38]">
      {/* Hero */}
      <section className="relative border-b border-[#E3EAE0]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#E4F1E8] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4E5D8] bg-white px-4 py-2 text-sm font-medium text-[#176B60]">
              <Heart className="h-4 w-4" />
              We&apos;re here to help
            </span>

            <h1 className="mt-7 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s start a conversation about your child&apos;s future.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#62776F]">
              Whether you have questions about our programs, admissions, or
              the support we provide, we&apos;d love to hear from you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-[#176B60] px-6 py-3.5 font-medium text-white transition hover:bg-[#12564D]"
              >
                Send us a message
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href={schoolConfig.links.programs}
                className="inline-flex items-center rounded-full border border-[#D7E3DA] bg-white px-6 py-3.5 font-medium text-[#176B60] transition hover:bg-[#F0F6EF]"
              >
                Explore programs
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-[#DDE8DC] bg-white p-6 shadow-[0_20px_70px_rgba(23,63,56,0.08)] sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E4F1E8] text-[#176B60]">
                <MessageCircle className="h-7 w-7" />
              </div>

              <h2 className="mt-6 text-2xl font-semibold">
                Every question matters.
              </h2>

              <p className="mt-3 leading-7 text-[#62776F]">
                Choosing the right school is an important decision. Our team
                can help you understand our learning environment, available
                programs, and next steps.
              </p>

              <div className="mt-7 space-y-4 border-t border-[#E7EDE5] pt-6">
                {[
                  "Learn about our programs",
                  "Understand the admissions process",
                  "Discuss your child's needs",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E4F1E8] text-xs text-[#176B60]">
                      ✓
                    </span>
                    <p className="text-sm leading-6 text-[#506A60]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 -z-0 h-24 w-24 rounded-full border-[12px] border-[#DDEDE0] sm:-left-7" />
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#176B60]">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            We&apos;d be happy to hear from you.
          </h2>
          <p className="mt-4 leading-7 text-[#62776F]">
            Choose the easiest way to reach us. We&apos;ll be glad to help you
            find the information you need.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const hasValue = Boolean(item.value?.trim());

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E0E8DE] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF3E9] text-[#176B60]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 font-semibold">{item.title}</h3>

                {hasValue ? (
                  item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 block break-words text-sm leading-6 text-[#62776F] underline-offset-4 hover:text-[#176B60] hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 whitespace-pre-line break-words text-sm leading-6 text-[#62776F]">
                      {item.value}
                    </p>
                  )
                ) : (
                  <p className="mt-2 text-sm leading-6 text-[#8A9A91]">
                    Contact details will be updated soon.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact form */}
      <section
        id="contact-form"
        className="border-y border-[#E0E9DF] bg-[#F1F6EE]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#176B60]">
              Send a message
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              How can we help your family?
            </h2>

            <p className="mt-5 leading-7 text-[#62776F]">
              Tell us a little about your enquiry. You can ask about our
              programs, admissions, visits, or anything else you would like
              to know.
            </p>

            <div className="mt-8 rounded-2xl border border-[#DCE7D9] bg-white p-5">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4F1E8] text-[#176B60]">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">
                    A welcoming first step
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#62776F]">
                    You don&apos;t need to have everything figured out before
                    getting in touch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Location placeholder */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#176B60]">
              Find us
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              We look forward to welcoming you.
            </h2>
            <p className="mt-4 leading-7 text-[#62776F]">
              Planning a visit? Contact our team to confirm the school
              address, arrange a suitable time, and learn what to expect
              during your visit.
            </p>

            <div className="mt-6">
              <Link
                href={schoolConfig.admissionsHref}
                className="inline-flex items-center gap-2 font-semibold text-[#176B60] hover:underline"
              >
                Learn about admissions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex min-h-64 flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-[#C9D9CA] bg-[#F1F6EE] p-8 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#176B60] shadow-sm">
              <MapPin className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">
              Our school location
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-[#62776F]">
              Add the verified school address and an embedded map here once
              the location is confirmed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
