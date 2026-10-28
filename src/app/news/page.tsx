
import { Suspense } from "react";
import NewsList from "@/app/news/news-list";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#f8faf7] text-[#193b35]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#dce8df] bg-[#edf5ed]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#43816c]">
            Navnidhi Special School
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            News, updates and announcements
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#61756c] md:text-lg">
            Stay connected with the latest news, school announcements,
            upcoming activities and important updates from our community.
          </p>
        </div>
      </section>

      {/* Announcements */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#43816c]">
              From our school
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Latest updates
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#61756c]">
            Important information and moments from our school, all in one place.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="rounded-2xl border border-[#dce8df] bg-white p-8 text-[#61756c]">
              Loading announcements...
            </div>
          }
        >
          <NewsList />
        </Suspense>
      </section>
    </main>
  );
}
