
import Link from "next/link";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

import { schoolConfig } from "@/lib/school-config";
import { CopyrightYear } from "@/components/layout/copyright-year";

const quickLinks = schoolConfig.navigation.filter(
  (item) => item.href !== "/"
);

export function Footer() {
  const { contact } = schoolConfig;

  return (
    <footer className="border-t border-[#DCE7DC] bg-[#F1F6EF] text-slate-700">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-16">
        <div>
          <Link
            href="/"
            className="inline-block rounded-lg text-xl font-extrabold
              text-[#175D52] focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#176B60]"
          >
            {schoolConfig.name}
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
            {schoolConfig.tagline}
          </p>

          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
            Every child deserves a welcoming place to learn, develop and
            participate.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#175D52]">
            Explore
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-sm transition-colors hover:text-[#176B60]
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-[#176B60]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#175D52]">
            Contact
          </h2>

          <ul className="mt-4 space-y-4 text-sm">
            {contact.address && (
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 size-5 shrink-0 text-[#176B60]"
                  aria-hidden="true"
                />
                <span className="whitespace-pre-line">{contact.address}</span>
              </li>
            )}

            {contact.phone && (
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 size-5 shrink-0 text-[#176B60]"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                  className="break-all hover:text-[#176B60]"
                >
                  {contact.phone}
                </a>
              </li>
            )}

            {contact.email && (
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 size-5 shrink-0 text-[#176B60]"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all hover:text-[#176B60]"
                >
                  {contact.email}
                </a>
              </li>
            )}

            {contact.openingHours && (
              <li className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 size-5 shrink-0 text-[#176B60]"
                  aria-hidden="true"
                />
                <span className="whitespace-pre-line">
                  {contact.openingHours}
                </span>
              </li>
            )}

            {!contact.address &&
              !contact.phone &&
              !contact.email &&
              !contact.openingHours && (
                <li className="text-sm leading-6 text-slate-500">
                  School contact information will be added here.
                </li>
              )}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#175D52]">
            For Families
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Have questions about our programs or admissions? We welcome
            enquiries from families and caregivers.
          </p>

          <Link
            href={schoolConfig.contactHref}
            className="mt-5 inline-flex min-h-11 items-center justify-center
              rounded-full border border-[#AFCDB8] bg-white px-5 py-2.5
              text-sm font-bold text-[#175D52] transition-colors
              hover:bg-[#E4F1E8] focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#176B60]
              focus-visible:ring-offset-2"
          >
            Contact the School
          </Link>
        </div>
      </div>

      <div className="border-t border-[#DCE7DC]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © <CopyrightYear /> {schoolConfig.name}. All rights
            reserved.
          </p>

          <Link
            href={schoolConfig.links.privacy}
            className="w-fit hover:text-[#176B60] focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#176B60]"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
