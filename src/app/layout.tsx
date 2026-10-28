import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Navnidhi Special School",
    template: "%s | Navnidhi Special School",
  },
  description:
    "Discover Navnidhi Special School, our educational programs, admissions and support for families.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      {/* <body className="min-h-screen bg-[#FFFCF5] text-slate-800 antialiased"> */}
         <a
          href="#main-content"
          className="sr-only z-[100] rounded-md bg-white p-3 text-[#175D52]
            focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <Header />
          <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
