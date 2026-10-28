
export const schoolConfig = {
  name: "Navnidhi Special School",
  tagline: "A place to learn, grow and belong.",

  // Set this to the path of your existing logo when ready.
  logoSrc: "/images/logo.png",

  // Add verified school details here before publishing.
  contact: {
    phone: "",
    email: "",
    address: "",
    openingHours: "",
  },

  links: {
    home: "/",
    about: "/about",
    programs: "/programs",
    admissions: "/admissions",
    gallery: "/gallery",
    news: "/news",
    contact: "/contact",
    privacy: "/privacy",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Programs", href: "/programs" },
    { label: "Admissions", href: "/admissions" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],

  admissionsHref: "/admissions",
  contactHref: "/contact",
} as const;
