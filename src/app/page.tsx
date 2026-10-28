
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Heart,
  HeartHandshake,
  MessageCircle,
  Palette,
  Puzzle,
  Sparkles,
  Sprout,
  UsersRound,
} from "lucide-react";

import { schoolConfig } from "@/lib/school-config";

const learningAreas = [
  {
    number: "01",
    title: "Learning at your pace",
    description:
      "Encouraging curiosity, building understanding, and celebrating progress one step at a time.",
    icon: BookOpen,
    background: "bg-[#E4F1E8]",
  },
  {
    number: "02",
    title: "Communication and connection",
    description:
      "Supporting meaningful expression, positive relationships, and connection with others.",
    icon: MessageCircle,
    background: "bg-[#F7EBDD]",
  },
  {
    number: "03",
    title: "Creativity and discovery",
    description:
      "Making room for exploration, creative expression, play, and new experiences.",
    icon: Palette,
    background: "bg-[#E8E9F8]",
  },
  {
    number: "04",
    title: "Growing independence",
    description:
      "Encouraging confidence, participation, and everyday skills through supported learning.",
    icon: Puzzle,
    background: "bg-[#F6E7E9]",
  },
];

const values = [
  {
    title: "Every child matters",
    description:
      "We believe each learner deserves dignity, encouragement, and respect.",
    icon: Heart,
  },
  {
    title: "Progress looks different for everyone",
    description:
      "We value individual strengths and meaningful steps forward.",
    icon: Sprout,
  },
  {
    title: "Families are partners",
    description:
      "Open communication helps build a supportive learning journey.",
    icon: UsersRound,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#FFFCF5]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 -z-10 size-80 rounded-full bg-[#E4F1E8] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 -z-10 size-72 rounded-full bg-[#F7EBDD] blur-3xl"
        />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9DFCF] bg-white/80 px-4 py-2 text-sm font-semibold text-[#175D52]">
              <HeartHandshake className="size-4" aria-hidden="true" />
              A place to learn, grow and belong
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight text-[#174F47] sm:text-5xl lg:text-6xl">
              Every child has a{" "}
              <span className="relative inline-block text-[#B66A38]">
                unique way
              </span>{" "}
              to shine.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Welcome to {schoolConfig.name}, a place where every learner
              deserves to feel valued, supported, and encouraged to discover
              their strengths.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={schoolConfig.links.programs}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#176B60] px-6 py-3 font-bold text-white shadow-sm transition-colors hover:bg-[#10574D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B60] focus-visible:ring-offset-2"
              >
                Explore Our Programs
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

              <Link
                href={schoolConfig.admissionsHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#B9D5C1] bg-white/80 px-6 py-3 font-bold text-[#175D52] transition-colors hover:bg-[#E4F1E8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B60] focus-visible:ring-offset-2"
              >
                Enquire About Admissions
              </Link>
            </div>

            <div className="mt-8 flex items-start gap-3 border-t border-[#E3E9DF] pt-6">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#E4F1E8] text-[#176B60]">
                <Heart className="size-5" aria-hidden="true" />
              </span>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                A welcoming approach that puts the individual child, their
                strengths, and their learning journey first.
              </p>
            </div>
          </div>

          {/* Decorative illustration — no stock image dependency */}
          <div className="relative mx-auto w-full max-w-lg">
            <div
              aria-hidden="true"
              className="absolute -right-3 top-8 size-20 rounded-full bg-[#E7D9B9] sm:-right-5 sm:size-24"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-3 size-24 rounded-full bg-[#C7DDCA] sm:-left-6 sm:size-28"
            />

            <div className="relative rounded-[2rem] border border-[#DDE8DC] bg-white p-3 shadow-[0_24px_80px_-32px_rgba(23,93,82,0.28)] sm:p-5">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#E4F1E8]">
                <div className="relative flex min-h-[330px] flex-col justify-between p-6 sm:min-h-[410px] sm:p-9">
                  <div
                    aria-hidden="true"
                    className="absolute right-8 top-8 size-20 rounded-full border-2 border-[#AFCDB8] sm:size-24"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute right-16 top-16 size-4 rounded-full bg-[#D3A56F]"
                  />

                  <div className="relative z-10 max-w-xs">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#175D52]">
                      <Sparkles className="size-3.5" aria-hidden="true" />
                      Room to flourish
                    </span>
                    <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#175D52] sm:text-4xl">
                      Small steps.
                      <br />
                      Big possibilities.
                    </h2>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-[#47685A]">
                      A learning journey shaped by encouragement, patience,
                      and possibility.
                    </p>
                  </div>

                  <div className="relative mt-8 flex items-end justify-center gap-3 sm:gap-5">
                    <div className="flex size-20 items-center justify-center rounded-t-[2rem] rounded-b-xl bg-[#D7B28C] sm:size-24">
                      <Heart className="size-8 text-[#80583F]" aria-hidden="true" />
                    </div>
                    <div className="flex size-28 items-center justify-center rounded-t-[3rem] rounded-b-xl bg-[#176B60] sm:size-32">
                      <Sparkles className="size-11 text-[#F8E7B9]" aria-hidden="true" />
                    </div>
                    <div className="flex size-20 items-center justify-center rounded-t-[2rem] rounded-b-xl bg-[#E9C5C5] sm:size-24">
                      <Sprout className="size-8 text-[#875C61]" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-2 pb-1 pt-4 sm:px-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#F7EBDD] text-[#9A5B32]">
                  <HeartHandshake className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold text-[#175D52]">
                    A journey of individual growth
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Every learner. Every strength. Every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#176B60]">
              Welcome to our school
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#174F47] sm:text-4xl">
              A community where every learner belongs.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Every child brings their own personality, interests, strengths,
              and ways of experiencing the world. Learning should make space
              for those differences.
            </p>
            <p>
              At {schoolConfig.name}, our aim is to create a supportive
              environment where children can explore, build confidence, and
              take meaningful steps forward with the support of their families
              and educators.
            </p>
            <Link
              href={schoolConfig.links.about}
              className="inline-flex min-h-11 items-center gap-2 font-bold text-[#176B60] hover:text-[#10574D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B60]"
            >
              Get to know our school
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Learning areas */}
      <section className="bg-[#F4F7F0] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#176B60]">
              Learning and development
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#174F47] sm:text-4xl">
              Space to discover, practice, and grow.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Meaningful learning can take many forms. Explore the areas that
              may be part of a learner's journey at our school.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {learningAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.number}
                  className="group rounded-2xl border border-[#E0E8DD] bg-white p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#175D52]/5"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex size-12 items-center justify-center rounded-2xl ${area.background} text-[#175D52]`}
                    >
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold leading-7 text-[#175D52]">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-6 text-slate-500">
            These are proposed homepage learning themes. Please confirm the
            school's actual programs and services before publishing them as
            official offerings.
          </p>

          <div className="mt-9 text-center">
            <Link
              href={schoolConfig.links.programs}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#B9D5C1] bg-white px-6 py-3 font-bold text-[#175D52] transition-colors hover:bg-[#E4F1E8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B60] focus-visible:ring-offset-2"
            >
              View All Programs
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#FFFCF5] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#176B60]">
                What matters to us
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#174F47] sm:text-4xl">
                A thoughtful approach, built around each child.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Learning is not a race. A supportive environment gives every
                child room to participate, express themselves, and develop
                confidence in their own way.
              </p>

              <Link
                href={schoolConfig.links.about}
                className="mt-7 inline-flex min-h-11 items-center gap-2 font-bold text-[#176B60] hover:text-[#10574D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B60]"
              >
                Learn about our approach
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="space-y-4">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.title}
                    className="flex gap-4 rounded-2xl border border-[#E3E9DF] bg-white p-5 sm:p-6"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#E4F1E8] text-[#176B60]">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-bold text-[#175D52]">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {value.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Family partnership */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-[#E4F1E8] p-7 sm:p-10">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-[#176B60]">
              <UsersRound className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-[#175D52]">
              Families are part of the journey.
            </h2>
            <p className="mt-4 leading-7 text-[#47685A]">
              Choosing a school is an important decision. We welcome
              conversations with families who want to understand our
              environment, approach, and learning opportunities.
            </p>
            <Link
              href={schoolConfig.contactHref}
              className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-[#175D52] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B60]"
            >
              Talk to our school
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-3xl bg-[#F7F1E5] p-7 sm:p-10">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-[#9A5B32]">
              <CheckCircle2 className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-[#68452E]">
              Take the next step.
            </h2>
            <p className="mt-4 leading-7 text-[#75604D]">
              If you are exploring school options, start a conversation with
              us to learn more about admissions and whether our school may be
              a good fit for your child.
            </p>
            <Link
              href={schoolConfig.admissionsHref}
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#176B60] px-6 py-3 font-bold text-white transition-colors hover:bg-[#10574D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B60] focus-visible:ring-offset-2"
            >
              Enquire About Admissions
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#175D52] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C7E2CC]">
              Start a conversation
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Every journey begins with a conversation.
            </h2>
            <p className="mt-4 leading-7 text-[#E0EEE5]">
              Have questions about Navnidhi Special School? We welcome your
              enquiry.
            </p>
          </div>

          <Link
            href={schoolConfig.contactHref}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#FFFCF5] px-6 py-3 font-bold text-[#175D52] transition-colors hover:bg-[#E4F1E8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#175D52]"
          >
            Contact Us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
