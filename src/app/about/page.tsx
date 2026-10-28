
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  HandHeart,
  Lightbulb,
  Users,
  Sparkles,
  Target,
  Eye,
  ShieldCheck,
  Sprout,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We believe every child deserves kindness, patience, understanding, and a supportive environment in which to grow.",
  },
  {
    icon: Sparkles,
    title: "Individuality",
    description:
      "Every child has unique strengths, interests, and needs. We value individual differences and respect each child's pace.",
  },
  {
    icon: HandHeart,
    title: "Dignity & Respect",
    description:
      "We strive to create a welcoming environment where every child is valued, respected, and encouraged to participate.",
  },
  {
    icon: Sprout,
    title: "Growth & Independence",
    description:
      "We encourage children to build confidence, develop everyday skills, and celebrate progress at their own pace.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand the child",
    description:
      "Recognise each child's individual strengths, interests, needs, and learning preferences.",
  },
  {
    number: "02",
    title: "Encourage learning",
    description:
      "Create supportive learning experiences that help children explore, practise, communicate, and participate.",
  },
  {
    number: "03",
    title: "Celebrate progress",
    description:
      "Value small steps as well as big milestones, while encouraging confidence and continued development.",
  },
  {
    number: "04",
    title: "Work together",
    description:
      "Build positive partnerships with families so that each child's development remains at the centre of our efforts.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf6] text-[#173b38]">
      {/* Hero */}
      <section className="relative isolate border-b border-[#dce8df]">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#dcefe3] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 left-0 -z-10 h-64 w-64 rounded-full bg-[#f5e8c9] blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe2d5] bg-white/80 px-4 py-2 text-sm font-medium text-[#39776b]">
              <Heart className="h-4 w-4" />
              Welcome to Navnidhi Special School
            </span>

            <h1 className="mt-7 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Every child deserves the{" "}
              <span className="font-serif italic text-[#438574]">
                opportunity
              </span>{" "}
              to shine.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#5d716c] sm:text-lg">
              We believe every child has something special to offer. Our
              purpose is to nurture abilities, encourage confidence, and
              create a supportive space where children can learn and grow
              in their own way.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#286b5d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1d554a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#286b5d]"
              >
                Explore our programs
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#cbded2] bg-white px-6 py-3.5 text-sm font-semibold text-[#286b5d] transition hover:bg-[#edf5ef]"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Decorative illustration */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-3 top-10 h-20 w-20 rounded-full bg-[#f2dfb8]" />
            <div className="absolute -right-2 bottom-8 h-24 w-24 rounded-full bg-[#d5e9dc]" />

            <div className="relative rounded-[2rem] border border-white bg-white/80 p-4 shadow-[0_24px_80px_-32px_rgba(31,86,71,0.28)] sm:p-6">
              <div className="flex min-h-[330px] flex-col justify-between rounded-[1.5rem] bg-[#eaf3e9] p-7 sm:min-h-[390px] sm:p-10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#638479]">
                      Learn · Grow · Belong
                    </p>
                    <p className="mt-3 max-w-[230px] text-2xl font-semibold leading-snug text-[#24564b] sm:text-3xl">
                      Different abilities. Shared possibilities.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-3 text-[#438574] shadow-sm">
                    <Sprout className="h-7 w-7" />
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-3">
                  <div className="flex aspect-square items-center justify-center rounded-3xl bg-[#f5dfb7]">
                    <Heart className="h-8 w-8 text-[#9c6840]" />
                  </div>
                  <div className="flex aspect-square items-center justify-center rounded-3xl bg-white">
                    <Lightbulb className="h-8 w-8 text-[#438574]" />
                  </div>
                  <div className="flex aspect-square items-center justify-center rounded-3xl bg-[#d7e8f0]">
                    <Users className="h-8 w-8 text-[#497c91]" />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-[#55736a]">
                  A place to discover strengths, build relationships, and
                  take the next step with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#438574]">
              Who we are
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              A place where every child matters.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5d716c]">
            <p>
              At Navnidhi Special School, we believe that education is about
              more than academic learning. It is also about developing
              confidence, discovering abilities, building relationships,
              and finding meaningful ways to participate in everyday life.
            </p>
            <p>
              Every child experiences the world differently. We believe
              children should be met with understanding, encouraged through
              their individual journeys, and given opportunities to explore
              their potential without being defined by their challenges.
            </p>
            <p>
              Our aim is to foster a caring and encouraging learning
              environment in which children feel valued and families feel
              heard. We see progress as a journey, with every new skill,
              expression of confidence, and step toward independence worth
              celebrating.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="bg-[#edf4ec]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 sm:px-10 sm:py-20 md:grid-cols-2 lg:px-12">
          <article className="rounded-[1.75rem] border border-[#d8e7da] bg-white p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e2f0e5] text-[#367565]">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold">Our mission</h2>
            <p className="mt-4 leading-8 text-[#5d716c]">
              To provide a caring, respectful, and supportive learning
              environment that recognises individual abilities, encourages
              personal development, and helps children build confidence
              and greater independence.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-[#d8e7da] bg-white p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7edda] text-[#9b7740]">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold">Our vision</h2>
            <p className="mt-4 leading-8 text-[#5d716c]">
              A more inclusive world where children of different abilities
              are valued, their potential is nurtured, and they have
              opportunities to learn, participate, and lead fulfilling
              lives with dignity.
            </p>
          </article>
        </div>
      </section>

      {/* Core values */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#438574]">
            What guides us
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Our values shape every step.
          </h2>
          <p className="mt-5 leading-8 text-[#5d716c]">
            The principles that guide how we support children, engage with
            families, and build a welcoming learning environment.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group rounded-[1.5rem] border border-[#e0e9df] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#b8d5c3] hover:shadow-[0_18px_40px_-28px_rgba(31,86,71,0.35)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf3e9] text-[#367565] transition group-hover:bg-[#286b5d] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#657770]">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Our approach */}
      <section className="bg-[#173f38] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a9d3b7]">
                How we approach learning
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Small steps can lead to meaningful change.
              </h2>
              <p className="mt-5 leading-8 text-[#c5d9cf]">
                We believe learning works best when children feel safe,
                supported, and encouraged. Our approach centres on
                understanding each child and recognising progress along
                the way.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm font-medium text-[#c5e5ce]">
                <ShieldCheck className="h-5 w-5" />
                Respect, encouragement, and inclusion
              </div>
            </div>

            <div className="space-y-0">
              {approach.map((item, index) => (
                <article
                  key={item.number}
                  className={`grid grid-cols-[52px_1fr] gap-5 py-6 ${
                    index !== approach.length - 1
                      ? "border-b border-white/15"
                      : ""
                  }`}
                >
                  <span className="pt-1 font-mono text-sm text-[#a9d3b7]">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#c5d9cf]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Family partnership */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#f3e9d4] px-7 py-12 sm:px-12 sm:py-14 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[40px] border-white/30"
          />

          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a7048]">
                Growing together
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Every journey begins with a conversation.
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-[#746750]">
                Choosing a school is an important decision for every
                family. We welcome you to connect with us, learn about our
                programs, and explore whether Navnidhi Special School is
                the right fit for your child.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-[#286b5d] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1d554a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#286b5d]"
            >
              Contact our school
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
