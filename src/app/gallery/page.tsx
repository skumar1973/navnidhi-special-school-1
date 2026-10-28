
import GalleryGrid from "./gallery-grid";
import {
  Camera,
  Heart,
  Images,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Camera,
    title: "School activities",
    description: "Everyday learning and classroom experiences.",
  },
  {
    icon: Heart,
    title: "Special moments",
    description: "Celebrations, friendships and achievements.",
  },
  {
    icon: Sparkles,
    title: "Growing together",
    description: "A glimpse into our inclusive learning community.",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f8faf7] text-[#193b35]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#dce8df] bg-[#edf5ed]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cbdccf] bg-white/70 px-4 py-2 text-sm font-medium text-[#43816c]">
              <Images className="h-4 w-4" />
              Our school, through the years
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Little moments.
              <span className="block text-[#43816c]">
                Meaningful memories.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#61756c] md:text-lg">
              Explore life at Navnidhi Special School through photographs
              and videos of learning, activities, celebrations and the
              special moments we share as a community.
            </p>

            <a
              href="#gallery"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#286b56] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1e5645]"
            >
              Explore our gallery
              <Images className="h-4 w-4" />
            </a>
          </div>

          {/* Decorative visual — no stock image required */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-[#d5e8c9]" />
            <div className="absolute -bottom-3 -left-3 h-28 w-28 rounded-full bg-[#e6d9b8]" />

            <div className="relative rounded-[2rem] border border-white/80 bg-white p-5 shadow-xl shadow-[#193b35]/5">
              <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-[1.5rem] bg-[#e8f2e6] p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#43816c] shadow-sm">
                  <Heart className="h-8 w-8" />
                </div>

                <p className="mt-5 text-xl font-semibold">
                  Every child has a story
                </p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[#61756c]">
                  Celebrating progress, individuality and the joy of learning.
                </p>
              </div>

              <div className="flex items-center gap-3 px-2 pb-1 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5edda] text-[#8b7548]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Moments that matter</p>
                  <p className="mt-1 text-xs text-[#7b8b82]">
                    Learning · Friendship · Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-16 md:px-10 md:pt-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#43816c]">
            A window into our world
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Life at Navnidhi
          </h2>

          <p className="mt-4 text-base leading-7 text-[#61756c]">
            From classroom activities to school celebrations, discover
            the experiences that make our community special.
          </p>
        </div>
      </section>

      {/* Gallery highlights */}
      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-[#dce8df] bg-white p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf5ed] text-[#43816c]">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#61756c]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Actual images and videos */}
      <section
        id="gallery"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-20 pt-12 md:px-10 md:pb-28"
      >
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#43816c]">
              Captured memories
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Photos & videos
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#61756c]">
            Browse our collection of photographs and videos from school life.
          </p>
        </div>

        <GalleryGrid />
      </section>

      {/* Closing section */}
      <section className="border-t border-[#dce8df] bg-[#edf5ed]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10 md:py-16">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Every moment is worth celebrating.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#61756c]">
              We believe every step forward deserves to be celebrated.
              Thank you for being part of our school community.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-[#b8d0bf] bg-white px-6 py-3 text-sm font-semibold text-[#286b56] transition hover:bg-[#f7faf6]"
          >
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}
