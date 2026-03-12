import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Derrick Hodge — Composer, Orchestrator, Musical Architect",
    template: "%s — Derrick Hodge",
  },
  description:
    "Two-time Grammy-winning composer, orchestrator, and musical architect. The visionary bridging the National Symphony Orchestra and Neo-Soul culture.",
  metadataBase: new URL("https://derrickhodge.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Derrick Hodge",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Derrick Hodge",
  url: "https://derrickhodge.com",
  jobTitle: "Composer, Orchestrator, Musical Architect",
  description:
    "Two-time Grammy-winning composer, orchestrator, and musical architect bridging the National Symphony Orchestra and Neo-Soul culture.",
  sameAs: [
    "https://www.instagram.com/dhodgeworld/",
    "https://twitter.com/derrickhodge",
    "https://www.facebook.com/officialderrickhodge",
    "https://www.youtube.com/channel/UC6oKX1fwFWFJKclxMdvn3IQ",
    "https://open.spotify.com/artist/5MbCkMCaGLj1MFKOC3UN7T",
    "https://music.apple.com/us/artist/derrick-hodge/267498502",
  ],
  award: ["Grammy Award", "Sundance Composer Fellow", "Motif Award"],
  affiliation: {
    "@type": "Organization",
    name: "Blue Note Records",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
