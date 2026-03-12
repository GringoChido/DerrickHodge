import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

const albums = [
  {
    title: "Color of Noize",
    year: "2020",
    label: "Blue Note Records",
    image: "/images/color-of-noize-cover.jpg",
    href: "/work/color-of-noize-album",
  },
  {
    title: "The Second",
    year: "2016",
    label: "Blue Note Records",
    image: "/images/the-second-cover.jpg",
    href: "/work/the-second",
  },
  {
    title: "Live Today",
    year: "2013",
    label: "Blue Note Records",
    image: "/images/live-today-cover.jpg",
    href: "/work/live-today",
  },
];

const HomePage = () => {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/images/hero-cinematic.jpg"
          alt="Derrick Hodge conducting"
          fill
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
          priority
          sizes="100vw"
        />

        {/* Top gradient */}
        <div
          className="absolute inset-x-0 top-0 h-[140px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,5,5,0.35) 0%, transparent 100%)",
          }}
        />

        {/* Bottom gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.5) 30%, transparent 100%)",
          }}
        />

        {/* Film grain */}
        <div className="grain-overlay" />

        {/* Hero content */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 md:px-10 pb-14 md:pb-16">
          <div className="max-w-[1200px] mx-auto">
            <p className="section-label mb-4 md:mb-5 tracking-[0.2em]">
              Blue Note Recording Artist
            </p>
            <h1>
              <span className="heading-hero block">Derrick</span>
              <span className="heading-hero block">Hodge</span>
            </h1>
            <div className="w-[48px] h-[2px] bg-accent mt-5 md:mt-7 mb-5 md:mb-6" />
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <p className="text-[11px] md:text-[12px] text-text-secondary uppercase tracking-[0.1em]">
                Composer &middot; Orchestrator &middot; Musical Architect
              </p>
              <p className="hidden md:block text-[11px] text-text-tertiary italic tracking-[0.02em]">
                Speaking existence into possibility
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
          <div
            className="w-[1px] h-7 bg-white/25"
            style={{ animation: "scroll-hint 2s ease-in-out infinite" }}
          />
        </div>
      </section>

      {/* ═══════════ ABOUT / BIO ═══════════ */}
      <section className="bg-bg py-32 md:py-40 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-16 items-start">
            <ScrollReveal>
              <p className="section-label mb-8">The Journey</p>
              <h2 className="heading-lg mb-8">
                The Architect Between the Symphony and the Street.
              </h2>
              <p className="body-lg mb-6 max-w-xl">
                Derrick Hodge has orchestrated some of music&apos;s most
                defining moments &mdash; anchoring iconic albums, directing
                groundbreaking symphonic premieres, and scoring film and
                television with a voice that bridges the concert hall and the
                culture. Composer, bandleader, producer, bassist, and advocate,
                he architects sonic worlds where Hip Hop and the symphony exist
                as one.
              </p>
              <p className="body-lg mb-10 max-w-xl">
                Two Grammys. Sundance Composer Fellow. Motif Award recipient.
                His playing on Common&apos;s <em>BE</em> &mdash; officially
                recognized as one of the Top 20 Basslines in Hip Hop History.
              </p>
              <Link href="/about" className="btn-pill">
                The Journey &rarr;
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="w-full md:w-[480px] aspect-[4/5] shrink-0 rounded overflow-hidden">
                <Image
                  src="/images/derrick-hodge-hero.jpg"
                  alt="Derrick Hodge"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ WORK PREVIEW ═══════════ */}
      <section className="bg-bg py-32 md:py-40 px-6 md:px-10 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="section-label mb-8">The Archive</p>
            <h2 className="heading-lg mb-8">
              Every Stage. Every Score. Every First.
            </h2>
            <p className="body-lg mb-6 max-w-xl">
              Three critically acclaimed solo albums on Blue Note Records.
              Orchestrated premieres at the Kennedy Center, Hollywood Bowl, and
              Carnegie Hall. Pioneered the first Hip-Hop composition performed by
              the National Symphony Orchestra. Directed the first
              All-African-American orchestra at the Academy Awards. Scored film
              and television, anchored Grammy-winning performances, and composed
              permanent installations at the Smithsonian. A body of work defined
              not by genre, but by an unrelenting commitment to speaking
              existence into possibility.
            </p>
            <Link href="/work" className="btn-pill">
              Explore The Archive &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ COLOR OF NOIZE ═══════════ */}
      <section className="bg-bg py-32 md:py-40 px-6 md:px-10 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-16 items-start">
            <ScrollReveal>
              <div className="mb-8">
                <Image
                  src="/images/color-of-noize-logo.png"
                  alt="Color of Noize"
                  width={200}
                  height={50}
                  className="h-[40px] md:h-[50px] w-auto brightness-0 invert"
                />
              </div>
              <h2 className="heading-lg mb-8">
                100 Musicians. Three Traditions. One Visionary Stage.
              </h2>
              <p className="body-lg mb-6 max-w-xl">
                Hodge architected Color of Noize as a living orchestra &mdash;
                over 100 musicians strong &mdash; fusing jazz, hip-hop, and
                classical traditions into a singular, genre-defying force. Built
                on a dual mission of artistic excellence and community, the
                ensemble pioneers new pathways for the next generation of Black
                classical musicians.
              </p>
              <p className="body-lg mb-10 max-w-xl">
                From anchoring the Super Bowl stage to collaborations with Jeezy
                and Ang&eacute;lique Kidjo &mdash; and the largest hip-hop
                orchestra ever assembled for Las Vegas in 2025.
              </p>
              <Link href="/color-of-noize" className="btn-pill">
                Learn More &rarr;
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="w-full md:w-[380px] aspect-square shrink-0 rounded overflow-hidden">
                <Image
                  src="/images/conductor-1.jpg"
                  alt="Derrick Hodge conducting the Color of Noize Orchestra"
                  width={380}
                  height={380}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ MARQUEE ═══════════ */}
      <section className="bg-bg py-20 md:py-28 marquee-wrap">
        <div className="marquee-inner">
          <span className="heading-xl whitespace-nowrap px-4">
            Architect. <span className="text-text-secondary">&#10035;</span>{" "}
            Orchestrate. <span className="text-text-secondary">&#10035;</span>{" "}
            Pioneer. <span className="text-text-secondary">&#10035;</span>{" "}
            Create. <span className="text-text-secondary">&#10035;</span>{" "}
            Architect. <span className="text-text-secondary">&#10035;</span>{" "}
            Orchestrate. <span className="text-text-secondary">&#10035;</span>{" "}
            Pioneer. <span className="text-text-secondary">&#10035;</span>{" "}
            Create. <span className="text-text-secondary">&#10035;</span>
            &nbsp;
          </span>
          <span className="heading-xl whitespace-nowrap px-4">
            Architect. <span className="text-text-secondary">&#10035;</span>{" "}
            Orchestrate. <span className="text-text-secondary">&#10035;</span>{" "}
            Pioneer. <span className="text-text-secondary">&#10035;</span>{" "}
            Create. <span className="text-text-secondary">&#10035;</span>{" "}
            Architect. <span className="text-text-secondary">&#10035;</span>{" "}
            Orchestrate. <span className="text-text-secondary">&#10035;</span>{" "}
            Pioneer. <span className="text-text-secondary">&#10035;</span>{" "}
            Create. <span className="text-text-secondary">&#10035;</span>
            &nbsp;
          </span>
        </div>
      </section>

      {/* ═══════════ DISCOGRAPHY ═══════════ */}
      <section className="bg-bg py-24 md:py-32 px-6 md:px-10 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="section-label mb-12">Discography</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {albums.map((album, i) => (
              <ScrollReveal key={album.title} delay={i * 0.1}>
                <Link href={album.href} className="group block">
                  <div className="aspect-square mb-4 group-hover:opacity-80 transition-opacity duration-200 rounded overflow-hidden">
                    <Image
                      src={album.image}
                      alt={album.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-[14px] font-semibold uppercase tracking-wide">
                    {album.title}
                  </p>
                  <p className="text-[12px] text-text-secondary mt-1">
                    {album.year} &middot; {album.label}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
