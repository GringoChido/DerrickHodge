import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Color of Noize",
  description:
    "Color of Noize — A musical ensemble founded by Derrick Hodge blending jazz, hip-hop, and classical traditions. Artistic excellence, community, and the next generation of Black classical musicians.",
};

const highlights = [
  {
    label: "2025",
    title: "Largest Hip-Hop Orchestra Set",
    description:
      "Hodge will direct the largest hip-hop orchestra ever assembled in Las Vegas — a landmark production scaling orchestral hip-hop to arena-level ambition.",
  },
  {
    label: "Super Bowl",
    title: "Super Bowl Performance",
    description:
      "Color of Noize anchored one of the world's biggest stages, delivering orchestral power at the Super Bowl and proving that classical and hip-hop belong side by side at the highest level.",
  },
  {
    label: "Collaboration",
    title: "Jeezy",
    description:
      "Hodge orchestrated a collaboration with Jeezy that layers trap and Southern hip-hop over full symphonic arrangements — demonstrating the ensemble's range and cultural fluency.",
    isAccent: true,
  },
  {
    label: "Collaboration",
    title: "Angelique Kidjo",
    description:
      "Partnering with the legendary Angelique Kidjo, Hodge expanded the ensemble's sonic architecture to embrace Afrobeat and West African musical traditions within its orchestral framework.",
    isAccent: true,
  },
];

const stats = [
  { value: "100+", label: "Musicians" },
  { value: "3", label: "Genres Fused", isAccent: true },
  { value: "1", label: "Mission" },
  { value: "\u221E", label: "Possibility", isAccent: true },
];

const ColorOfNoizePage = () => {
  return (
    <>
      {/* PAGE HERO */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-40 pb-20">
        <div className="mb-10">
          <Image
            src="/images/color-of-noize-logo.png"
            alt="Color of Noize"
            width={320}
            height={80}
            className="h-[60px] md:h-[80px] w-auto mx-auto brightness-0 invert"
            priority
          />
        </div>
        <p className="text-[14px] md:text-[18px] uppercase tracking-[0.12em] text-text-secondary mb-6">
          Musical Ensemble &middot; Founded by Derrick Hodge
        </p>
        <h1 className="heading-xl mb-10">Color of Noize</h1>
        <p className="text-[14px] md:text-[16px] uppercase text-text-secondary leading-[1.6] max-w-[700px] tracking-wide">
          Where jazz, hip-hop, and classical converge. Over 100 musicians
          strong. Architected as a dual-mission force: artistic excellence and
          pioneering pathways for the next generation of Black classical
          musicians.
        </p>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-[960px] mx-auto">
          <ScrollReveal>
            <div className="aspect-video max-w-[800px] mx-auto rounded overflow-hidden">
              <Image
                src="/images/conductor-1.jpg"
                alt="Derrick Hodge conducting the Color of Noize Orchestra"
                width={800}
                height={450}
                className="w-full h-full object-cover"
                sizes="(max-width: 960px) 100vw, 800px"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-[960px] mx-auto">
          <ScrollReveal>
            <p className="section-label mb-8">Mission</p>
            <p className="text-[16px] md:text-[20px] uppercase text-text-secondary leading-[1.6] tracking-wide mb-12">
              Hodge architected Color of Noize as a singular orchestral force —
              fusing jazz, hip-hop, and classical traditions into one
              uncompromising ensemble. Pioneered on a dual mission of artistic
              excellence and community, the project champions Black classical
              musicians and orchestrates pathways for inner-city youth into
              orchestral music.
            </p>
            <p className="text-[16px] md:text-[20px] uppercase text-text-secondary leading-[1.6] tracking-wide">
              Commanding ensembles exceeding 100 musicians at a time —
              marshalling large string sections alongside horns, rhythm, and
              electronics — Color of Noize redefines what an orchestra looks
              like, sounds like, and who it serves. Every performance is both a
              concert and a statement of possibility.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="px-6 md:px-10 py-20 md:py-32 border-t border-border">
        <div className="max-w-[960px] mx-auto">
          <ScrollReveal>
            <p className="section-label mb-12">Highlights</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="border border-border rounded px-6 py-6">
                  <p
                    className={`text-[11px] uppercase tracking-[0.12em] mb-3 ${
                      item.isAccent ? "text-accent" : "text-text-secondary"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p className="text-[14px] font-semibold uppercase tracking-wide mb-2">
                    {item.title}
                  </p>
                  <p className="text-[13px] text-text-secondary leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY & YOUTH */}
      <section className="px-6 md:px-10 py-20 md:py-32 border-t border-border">
        <div className="max-w-[960px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <p className="section-label mb-8">Community</p>
              <h2 className="heading-md mb-8">
                Pioneering the Next Generation.
              </h2>
              <p className="body-lg mb-6">
                Championed from its founding as a vehicle for access and
                opportunity, Color of Noize actively recruits and mentors
                inner-city youth — introducing them to orchestral instruments and
                composition, and pioneering a pipeline into classical music that
                has historically excluded Black communities.
              </p>
              <p className="body-lg">
                Pioneered by Hodge&apos;s conviction that the orchestra belongs
                to everyone, each Color of Noize event demonstrates to young
                musicians that their stories, rhythms, and traditions command a
                place in every concert hall, arena, and amphitheater.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="aspect-[4/5] rounded overflow-hidden">
                <Image
                  src="/images/derek-hodge-kevin-mohatt.jpg"
                  alt="Derrick Hodge with bass"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ENSEMBLE STATS */}
      <section className="px-6 md:px-10 py-20 md:py-32 border-t border-border">
        <div className="max-w-[960px] mx-auto">
          <ScrollReveal>
            <p className="section-label mb-12">The Ensemble</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <p
                  className={`heading-lg ${
                    stat.isAccent ? "text-accent" : "text-text"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="text-[12px] text-text-secondary uppercase tracking-[0.08em] mt-2">
                  {stat.label}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-20 md:py-32 border-t border-border text-center">
        <div className="max-w-[960px] mx-auto">
          <ScrollReveal>
            <p className="section-label mb-8">Connect</p>
            <h2 className="heading-md mb-8">Engage the Vision.</h2>
            <p className="body-lg mb-10 max-w-lg mx-auto">
              For commissions, strategic partnerships, and community engagement
              inquiries related to Color of Noize, contact the team directly.
            </p>
            <a
              href="mailto:info@secondsonproductions.com"
              className="btn-pill inline-flex"
            >
              Get In Touch &rarr;
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ColorOfNoizePage;
