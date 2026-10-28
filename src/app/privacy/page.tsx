
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Navnidhi Special School",
  description:
    "Learn how Navnidhi Special School, Delhi, handles personal information and protects the privacy of students, parents, guardians, and website visitors.",
};

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    paragraphs: [
      "We may collect information that you voluntarily provide when contacting the School or submitting an enquiry, such as your name, email address, telephone number, and message.",
      "Basic technical information, such as browser type, device information, and website usage data, may also be processed by our hosting provider or other services where applicable.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Information",
    paragraphs: [
      "We use information to respond to enquiries, communicate with parents and guardians, share school activities, maintain our website, improve website security, and meet applicable legal obligations.",
      "We aim to use personal information only for appropriate purposes related to the School and its website.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "3. Children's Privacy and Media",
    paragraphs: [
      "We recognise the importance of protecting the privacy, dignity, and safety of children. Our website may feature photographs and videos of school activities, celebrations, educational programmes, and events.",
      "Before publishing identifiable student photographs or videos, the School aims to obtain appropriate permission from a parent or legal guardian, or other authorisation required by applicable law.",
      "We aim to avoid publishing unnecessary personal details alongside student photographs. Parents and guardians may contact the School to raise concerns or request a review or removal of published media.",
      "Online content may be copied or shared by third parties. We cannot guarantee the removal of copies distributed outside our website.",
    ],
  },
  {
    id: "cookies",
    title: "4. Cookies and Website Technologies",
    paragraphs: [
      "Our website or its service providers may use cookies or similar technologies for essential functionality, security, or performance. If optional analytics or tracking technologies are used, we will provide appropriate information and choices where required.",
      "You can manage cookies through your browser settings, although disabling certain cookies may affect website functionality.",
    ],
  },
  {
    id: "third-party-services",
    title: "5. Third-Party Services",
    paragraphs: [
      "We use third-party services to support website functionality and media delivery. These providers may process information as necessary to deliver their services, subject to their applicable privacy policies and our arrangements with them.",
    ],
    links: [
      {
        label: "Cloudinary Privacy Policy",
        href: "https://cloudinary.com/privacy",
        description:
          "Used to store and deliver photographs and videos displayed in our gallery.",
      },
      {
        label: "Supabase Privacy Policy",
        href: "https://supabase.com/privacy",
        description:
          "Used to store and retrieve website data, including gallery records and media URLs.",
      },
    ],
  },
  {
    id: "sharing-information",
    title: "6. Sharing of Information",
    paragraphs: [
      "We do not sell personal information to third parties. Information may be shared with service providers supporting our operations, where required by law, to protect individuals' rights or safety, or where appropriate authorisation has been obtained.",
      "We aim to limit disclosures to what is reasonably necessary for the relevant purpose.",
    ],
  },
  {
    id: "data-security",
    title: "7. Data Storage and Security",
    paragraphs: [
      "We aim to take reasonable technical and organisational measures to protect information against unauthorised access, alteration, disclosure, or destruction.",
      "No electronic storage or transmission system can be guaranteed to be completely secure. Information is retained for as long as reasonably necessary, subject to applicable legal obligations and legitimate school recordkeeping requirements.",
    ],
  },
  {
    id: "your-rights",
    title: "8. Privacy Requests",
    paragraphs: [
      "Subject to applicable law, you may contact us to request access to, correction of, or deletion of personal information, raise a privacy concern, or request a review of photographs and videos published on our website.",
      "Requests relating to students should be made by a parent, legal guardian, or other person legally authorised to act on the student's behalf, where applicable. We may need to verify identity and authority before responding.",
    ],
  },
  {
    id: "external-links",
    title: "9. External Links",
    paragraphs: [
      "Our website may contain links to external websites. These websites operate independently and have their own privacy policies. We are not responsible for their content or privacy practices.",
    ],
  },
  {
    id: "policy-changes",
    title: "10. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy when our website, services, or legal obligations change. Revised versions will be published on this page with an updated date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Page header */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </Link>

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-primary">
            Navnidhi Special School · Delhi
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            We value the trust of our students, families, and visitors.
            This page explains how we handle personal information and
            protect privacy when you use our website.
          </p>

          <p className="mt-5 text-sm text-muted-foreground">
            Last updated: 28 October 2026
          </p>
        </div>
      </section>

      {/* Policy content */}
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
        {/* Table of contents */}
        <aside className="h-fit rounded-xl border bg-card p-5 lg:sticky lg:top-8">
          <h2 className="mb-4 text-sm font-semibold">On this page</h2>

          <nav aria-label="Privacy policy contents">
            <ul className="space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm leading-5 text-muted-foreground transition-colors hover:text-primary"
                  >
                    {section.title.replace(/^\d+\.\s*/, "")}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Policy sections */}
        <article className="min-w-0">
          <div className="divide-y">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-8 py-8 first:pt-0"
              >
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {section.title}
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {"links" in section && section.links && (
                    <ul className="space-y-4 pt-1">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-primary underline-offset-4 hover:underline"
                          >
                            {link.label}
                          </a>
                          <p className="mt-1">{link.description}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* Contact information */}
          <section
            id="contact"
            className="mt-8 scroll-mt-8 rounded-2xl border bg-muted/30 p-6 sm:p-8"
          >
            <p className="text-sm font-medium text-primary">
              Privacy enquiries
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              11. Contact Us
            </h2>

            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              If you have questions about this policy, wish to correct
              personal information, or would like to raise a concern about
              a photograph or video, please contact the School.
            </p>

            <address className="mt-6 space-y-3 text-sm not-italic">
              <p className="font-semibold">
                Navnidhi Special School, Delhi
              </p>

              <p className="text-muted-foreground">
                Official school address: Please insert the school's
                verified postal address.
              </p>

              <p className="text-muted-foreground">
                Email: Please insert the school's official email address.
              </p>

              <p className="text-muted-foreground">
                Phone: Please insert the school's official contact number.
              </p>
            </address>
          </section>

          <p className="mt-8 text-xs leading-6 text-muted-foreground">
            This policy is a general template and should be reviewed to
            ensure that it accurately reflects the School's data practices
            and applicable Indian privacy requirements.
          </p>
        </article>
      </div>
    </main>
  );
}
