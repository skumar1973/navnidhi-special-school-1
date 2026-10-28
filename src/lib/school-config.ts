
export const schoolConfig = {
  name: "Navnidhi Special School",
  tagline: "A place to learn, grow and belong.",

  // Set this to the path of your existing logo when ready.
  logoSrc: "/images/logo.png",

  // Add verified school details here before publishing.
  contact: {
    phone: "918294647101",
    email: "navnidhi2907@gmail.com",
    address: "M-471 Guru Harkishan Nagar Pachim Vihar, Nearest  Metro Peeragarhi, New Delhi 110087",
    openingHours: "8:00 AM - 1:00 PM Monday to Friday",
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
    { label: "Annoucements", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],

  admissionsHref: "/admissions",
  contactHref: "/contact",
} as const;
