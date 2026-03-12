import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  InstagramIcon,
  XIcon,
  FacebookIcon,
  YouTubeIcon,
  SpotifyIcon,
  AppleMusicIcon,
  TidalIcon,
  AmazonMusicIcon,
} from "@/components/social-icons";

export const metadata: Metadata = {
  title: "Inquiries & Commissions",
  description:
    "Commissions, booking, creative direction, and professional engagements. Management representation for Derrick Hodge.",
};

const contacts = [
  {
    name: "Vincent Bennett",
    role: "Manager",
    email: "vincent@secondsonproductions.com",
  },
  {
    name: "Becca Martinez",
    role: "Color of Noize Orchestra Contractor",
    email: "becca@secondsonproductions.com",
  },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/dhodgeworld/",
    label: "Instagram",
    handle: "@dhodgeworld",
    Icon: InstagramIcon,
  },
  {
    href: "https://twitter.com/derrickhodge",
    label: "X",
    handle: "@derrickhodge",
    Icon: XIcon,
  },
  {
    href: "https://www.facebook.com/officialderrickhodge",
    label: "Facebook",
    handle: "officialderrickhodge",
    Icon: FacebookIcon,
  },
  {
    href: "https://www.youtube.com/channel/UC6oKX1fwFWFJKclxMdvn3IQ",
    label: "YouTube",
    handle: "Derrick Hodge",
    Icon: YouTubeIcon,
  },
];

const streamingLinks = [
  {
    href: "https://open.spotify.com/artist/5MbCkMCaGLj1MFKOC3UN7T",
    label: "Spotify",
    Icon: SpotifyIcon,
  },
  {
    href: "https://music.apple.com/us/artist/derrick-hodge/267498502",
    label: "Apple Music",
    Icon: AppleMusicIcon,
  },
  {
    href: "https://tidal.com/browse/artist/4601971",
    label: "Tidal",
    Icon: TidalIcon,
  },
  {
    href: "https://music.amazon.com/artists/B001NBNW3I/derrick-hodge",
    label: "Amazon Music",
    Icon: AmazonMusicIcon,
  },
];

const ContactPage = () => {
  return (
    <>
      {/* PAGE HERO */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-40 pb-16">
        <p className="text-[14px] md:text-[18px] uppercase tracking-[0.12em] text-text-secondary mb-6">
          Inquiries &amp; Commissions
        </p>
        <h1 className="heading-xl mb-10">Inquiries &amp; Commissions</h1>
        <p className="text-[14px] md:text-[16px] uppercase text-text-secondary leading-[1.6] max-w-[600px] tracking-wide">
          For commissions, booking, creative direction, and all professional
          engagements.
        </p>
      </section>

      {/* MANAGEMENT */}
      <section className="px-6 md:px-10 py-20 md:py-32 border-t border-border">
        <div className="max-w-[960px] mx-auto">
          <ScrollReveal>
            <p className="section-label mb-12">Representation</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contacts.map((contact) => (
              <ScrollReveal key={contact.name}>
                <div className="border border-border rounded px-8 py-8">
                  <p className="text-[22px] md:text-[26px] font-bold uppercase tracking-[-0.01em] mb-2">
                    {contact.name}
                  </p>
                  <p className="text-[13px] text-text-secondary uppercase tracking-[0.08em] mb-6">
                    {contact.role}
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 text-[14px] md:text-[16px] font-medium text-text hover:text-accent transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    {contact.email}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-[13px] text-text-secondary mt-8">
              Second Son Productions
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="px-6 md:px-10 py-20 md:py-32 border-t border-border">
        <div className="max-w-[960px] mx-auto">
          <ScrollReveal>
            <p className="section-label mb-12">Social</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((link) => (
              <ScrollReveal key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-border rounded px-6 py-6 block hover:border-border-hover transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-text group-hover:text-accent transition-colors duration-200">
                      <link.Icon />
                    </span>
                    <p className="text-[14px] font-semibold uppercase tracking-wide">
                      {link.label}
                    </p>
                  </div>
                  <p className="text-[12px] text-text-secondary">
                    {link.handle}
                  </p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STREAMING */}
      <section className="px-6 md:px-10 py-20 md:py-32 border-t border-border">
        <div className="max-w-[960px] mx-auto">
          <ScrollReveal>
            <p className="section-label mb-12">Listen</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {streamingLinks.map((link) => (
              <ScrollReveal key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-border rounded px-6 py-6 block hover:border-border-hover transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-text group-hover:text-accent transition-colors duration-200">
                      <link.Icon />
                    </span>
                    <p className="text-[14px] font-semibold uppercase tracking-wide">
                      {link.label}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Newsletter */}
          <ScrollReveal>
            <div className="mt-12 border border-border rounded px-8 py-8 text-center">
              <p className="section-label mb-4">Stay Updated</p>
              <p className="text-[14px] font-semibold uppercase tracking-wide mb-6">
                Subscribe to the Newsletter
              </p>
              <a
                href="https://eepurl.com/g8q7tH"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill inline-flex"
              >
                Subscribe &rarr;
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
