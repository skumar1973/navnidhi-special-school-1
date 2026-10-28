
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { schoolConfig } from "@/lib/school-config";
import {
  DesktopNavigation,
  MobileNavigation,
} from "@/components/layout/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E3E9DF] bg-[#FFFCF5]/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label={`${schoolConfig.name} home`}
          className="flex min-w-0 items-center gap-3 rounded-xl
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-[#176B60] focus-visible:ring-offset-2"
        >
          <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#D7E5D9] bg-[#E4F1E8]">
            {schoolConfig.logoSrc ? (
              <Image
                src={schoolConfig.logoSrc}
                alt={`${schoolConfig.name} logo`}
                width={299}
                height={280}
                className="size-full object-contain"
                priority
              />
            ) : (
              <span
                aria-hidden="true"
                className="text-xs font-semibold text-[#557568]"
              >
                LOGO
              </span>
            )}
          </span>

          <span className="min-w-0">
            <span className="block truncate text-base font-extrabold tracking-tight text-[#175D52] sm:text-lg">
              {schoolConfig.name}
            </span>
            <span className="hidden text-xs text-slate-600 sm:block">
              {schoolConfig.tagline}
            </span>
          </span>
        </Link>

        <DesktopNavigation />

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={schoolConfig.admissionsHref}
            className="hidden min-h-11 items-center justify-center gap-2
              rounded-full bg-[#176B60] px-5 py-2.5 text-sm font-bold
              text-white transition-colors hover:bg-[#10574D]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#176B60] focus-visible:ring-offset-2
              lg:inline-flex"
          >
            Enquire Now
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>

          <MobileNavigation />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="h-1 bg-gradient-to-r from-[#176B60] via-[#A9CBB0] to-[#E9D5A5]"
      />
    </header>
  );
}
