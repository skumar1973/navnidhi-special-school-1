
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

import { schoolConfig } from "@/lib/school-config";
// import { cacheLife } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Explore the learning programs offered by Navnidhi Special School.",
};

// export const revalidate = 60;

type Program = {
  id: string | number;
  title: string;
  slug: string;
  short_description: string;
  description: string | null;
  age_group: string | null;
};

async function getPrograms(): Promise<{
  programs: Program[];
  error: boolean;
}> {
  // "use cache";
  //  cacheLife("minutes");

  const supabase = createSupabaseServerClient();

  if (!supabase) {
    console.error("Supabase environment variables are not configured.");
    return { programs: [], error: true };
  }

  const { data, error } = await supabase
    .from("programs")
    .select(
      "id, title, slug, short_description, description, age_group"
    )
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) {
    // Keep database details in server logs, not in the public response.
    console.error("Failed to fetch school programs:", error.message);
    return { programs: [], error: true };
  }

  return {
    programs: (data ?? []) as Program[],
    error: false,
  };
}

const cardStyles = [
  "bg-[#E4F1E8]",
  "bg-[#F7EBDD]",
  "bg-[#E8E9F8]",
  "bg-[#F6E7E9]",
];

const icons = [BookOpen, HeartHandshake, Sparkles];

export default async function ProgramsPage() {
  const { programs, error } = await getPrograms();

  return (
    <>
      <section className="bg-[#FFFCF5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#176B60]">
              Discover our programs
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#174F47] sm:text-5xl">
              Learning journeys shaped around every child.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore the programs at {schoolConfig.name}. Each program
              listed below is managed by the school and loaded from our
              program database.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm font-medium text-[#175D52]">
            <span className="rounded-full border border-[#D3E3D4] bg-white px-4 py-2">
              Individual growth
            </span>
            <span className="rounded-full border border-[#D3E3D4] bg-white px-4 py-2">
              Supportive learning
            </span>
            <span className="rounded-full border border-[#D3E3D4] bg-white px-4 py-2">
              Family partnership
            </span>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="program-list-heading"
        className="bg-[#F4F7F0] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#176B60]">
                Find the right fit
              </p>
              <h2
                id="program-list-heading"
                className="mt-3 text-3xl font-extrabold tracking-tight text-[#174F47]"
              >
                Our programs
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-600">
              Have a question about a program? Contact the school to discuss
              your child's needs and available options.
            </p>
          </div>

          {error ? (
            <div
              role="status"
              className="mt-10 rounded-2xl border border-[#E5D5B9] bg-white p-8"
            >
              <h3 className="text-lg font-bold text-[#175D52]">
                Programs are temporarily unavailable
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                We couldn't load the program information right now. Please
                try again later or contact the school.
              </p>
              <Link
                href={schoolConfig.contactHref}
                className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-[#176B60] hover:underline"
              >
                Contact the school
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          ) : programs.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-[#DCE7DC] bg-white p-8 sm:p-10">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[#E4F1E8] text-[#176B60]">
                <BookOpen className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-[#175D52]">
                Program details are coming soon
              </h3>
              <p className="mt-3 max-w-xl leading-7 text-slate-600">
                Our program information will appear here once it has been
                published by the school.
              </p>
              <Link
                href={schoolConfig.contactHref}
                className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-[#176B60] hover:underline"
              >
                Contact the school
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          ) : (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((program, index) => {
                const Icon = icons[index % icons.length];

                return (
                  <article
                    key={program.id}
                    className="flex h-full flex-col rounded-2xl border border-[#E0E8DD] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#175D52]/5 sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${cardStyles[index % cardStyles.length]} text-[#175D52}`}
                      >
                        <Icon className="size-6" aria-hidden="true" />
                      </span>

                      {program.age_group && (
                        <span className="rounded-full bg-[#F4F7F0] px-3 py-1.5 text-xs font-semibold text-[#47685A]">
                          {program.age_group}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-6 text-xl font-bold leading-7 text-[#175D52]">
                      {program.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {program.short_description}
                    </p>

                    {program.description && (
                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {program.description}
                      </p>
                    )}

                    <div className="mt-auto pt-6">
                      <Link
                        href={`${schoolConfig.contactHref}?program=${encodeURIComponent(program.slug)}`}
                        className="inline-flex min-h-11 items-center gap-2 font-bold text-[#176B60] hover:text-[#10574D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B60]"
                      >
                        Ask about this program
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#175D52] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Looking for more information?
            </h2>
            <p className="mt-3 leading-7 text-[#E0EEE5]">
              Get in touch with the school to ask about available programs
              and the admissions process.
            </p>
          </div>

          <Link
            href={schoolConfig.admissionsHref}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#FFFCF5] px-6 py-3 font-bold text-[#175D52] transition-colors hover:bg-[#E4F1E8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#175D52]"
          >
            Ask About Admissions
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
