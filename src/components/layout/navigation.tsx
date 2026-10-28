
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { schoolConfig } from "@/lib/school-config";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-1 lg:flex"
    >
      {schoolConfig.navigation.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={[
              "rounded-full px-3 py-2 text-sm font-semibold",
              "transition-colors focus-visible:outline-none",
              "focus-visible:ring-2 focus-visible:ring-teal-700",
              active
                ? "bg-[#E4F1E8] text-[#175D52]"
                : "text-slate-700 hover:bg-[#F7F1E5] hover:text-[#175D52]",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          aria-label="Open navigation menu"
          className="inline-flex size-11 items-center justify-center rounded-xl
            border border-[#B9D9CC] bg-white text-[#175D52]
            transition-colors hover:bg-[#E4F1E8]
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-[#176B60] focus-visible:ring-offset-2"
        >
          <Menu className="size-5" aria-hidden="true" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[min(88vw,380px)] overflow-y-auto
            border-l border-[#E3E9DF] bg-[#FFFCF5] p-0"
        >
          <SheetHeader className="border-b border-[#E3E9DF] p-6 text-left">
            <SheetTitle className="text-xl font-extrabold text-[#175D52]">
              {schoolConfig.name}
            </SheetTitle>
            <p className="text-sm text-slate-600">
              {schoolConfig.tagline}
            </p>
          </SheetHeader>

          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-1 p-4"
          >
            {schoolConfig.navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={[
                    "rounded-xl px-4 py-3 text-base font-semibold",
                    "transition-colors focus-visible:outline-none",
                    "focus-visible:ring-2 focus-visible:ring-[#176B60]",
                    active
                      ? "bg-[#E4F1E8] text-[#175D52]"
                      : "text-slate-700 hover:bg-[#F7F1E5]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href={schoolConfig.admissionsHref}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex min-h-12 items-center justify-center
                rounded-full bg-[#176B60] px-5 py-3 text-center
                font-bold text-white transition-colors
                hover:bg-[#10574D] focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[#176B60]
                focus-visible:ring-offset-2"
            >
              Enquire for Admissions
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
