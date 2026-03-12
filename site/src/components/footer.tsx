import Link from "next/link";
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

const socialLinks = [
  { href: "https://www.instagram.com/dhodgeworld/", label: "Instagram", Icon: InstagramIcon },
  { href: "https://twitter.com/derrickhodge", label: "X", Icon: XIcon },
  { href: "https://www.facebook.com/officialderrickhodge", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.youtube.com/channel/UC6oKX1fwFWFJKclxMdvn3IQ", label: "YouTube", Icon: YouTubeIcon },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "The Journey" },
  { href: "/work", label: "The Archive" },
  { href: "/color-of-noize", label: "Color of Noize" },
  { href: "/contact", label: "Inquiries" },
];

const streamingLinks = [
  { href: "https://open.spotify.com/artist/5MbCkMCaGLj1MFKOC3UN7T", label: "Spotify", Icon: SpotifyIcon },
  { href: "https://music.apple.com/us/artist/derrick-hodge/267498502", label: "Apple Music", Icon: AppleMusicIcon },
  { href: "https://tidal.com/browse/artist/4601971", label: "Tidal", Icon: TidalIcon },
  { href: "https://music.amazon.com/artists/B001NBNW3I/derrick-hodge", label: "Amazon Music", Icon: AmazonMusicIcon },
];

export const Footer = () => {
  return (
    <footer className="bg-accent px-6 md:px-10 pt-16 pb-0 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Top info grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 mb-20 md:mb-28">
          {/* Col 1: Name & Copyright */}
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-bg">
              Derrick Hodge
            </p>
            <p className="text-[13px] text-bg/60">&copy; {new Date().getFullYear()}</p>
          </div>

          {/* Col 2: Social */}
          <div className="flex gap-4 items-start">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-bg hover:text-bg/60 transition-colors duration-200"
              >
                <link.Icon />
              </a>
            ))}
          </div>

          {/* Col 3: Navigation */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.06em] text-bg hover:text-bg/60 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Col 4: Streaming */}
          <div>
            <p className="text-[11px] text-bg/60 uppercase tracking-[0.12em] mb-3">
              Listen
            </p>
            <div className="flex gap-4 items-start">
              {streamingLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-bg hover:text-bg/60 transition-colors duration-200"
                >
                  <link.Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Giant name — black on accent, clipped at bottom */}
        <div className="overflow-hidden" style={{ marginBottom: "-0.18em" }}>
          <h2 className="footer-name text-bg">Derrick Hodge</h2>
        </div>
      </div>
    </footer>
  );
};
