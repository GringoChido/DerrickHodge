import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "The Journey",
  description:
    "Two-time Grammy-winning musical architect Derrick Hodge — the bridge between the National Symphony Orchestra and Neo-Soul culture. Composer, conductor, producer, visionary.",
};

const symphonicCredits = [
  { year: "2022", desc: "Academy Awards — Conductor & Arranger for Orchestra", tag: "Oscars" },
  { year: "2022", desc: "GRAMMYs, Nas segment — Arranger", tag: "Grammy" },
  { year: "2022", desc: "Juneteenth Celebration, Hollywood Bowl for CNN — Conductor & Arranger", tag: "CNN" },
  { year: "2022", desc: "Robert Glasper Interprets Duke Ellington with Recollective Orchestra — Conductor & Arranger", tag: "" },
  { year: "2022", desc: "LA Phil with H.E.R., Gwen Stefani, Christina Aguilera — Arranger", tag: "LA Phil" },
  { year: "2021", desc: "LA Phil with Syd — Arranger", tag: "LA Phil" },
  { year: "2018", desc: "National Symphony Orchestra with Nas — Arranger", tag: "NSO" },
  { year: "2017", desc: "National Symphony Shows with Common — Arranger", tag: "NSO" },
];

const filmCredits = [
  { year: "2023", desc: "The Best Man: Final Chapters — Directed by Malcolm D. Lee · Music Composer", tag: "Series" },
  { year: "2021–2023", desc: "Run the World — S1 & S2 — Directed by Leigh Davenport & Millicent Shelton · Music Composer", tag: "Series" },
  { year: "2022", desc: "The System — Directed by Dallas Jackson with Jeremy Piven & Terrence Howard · Composer", tag: "Film" },
  { year: "2020", desc: "The Photograph — Directed by Stella Meghie · Score Consultant", tag: "Film" },
  { year: "2020", desc: 'Antebellum — "Eden" Original Song · Songwriter, Orchestrator / Orchestral Arranger', tag: "Film" },
  { year: "", desc: "The Black Candle — Narrated by Ms. Maya Angelou · Composer", tag: "Documentary" },
  { year: "", desc: "Fauberg Treme: The Untold Story of Black New Orleans · Composer", tag: "Documentary" },
];

const milestones = [
  {
    title: "National Symphony",
    year: "2014",
    description:
      "Pioneered the first Hip-Hop Composition performed by the National Symphony Orchestra. Orchestrated and directed Nas's Illmatic 20th anniversary at the Kennedy Center, conducted by Steven Reineke. Named by FENDER as one of the top moments in Hip Hop history.",
    descMobile:
      "Pioneered the first Hip-Hop Composition performed by the National Symphony Orchestra. Orchestrated and directed Nas's Illmatic 20th anniversary at the Kennedy Center.",
  },
  {
    title: "Carnegie Hall",
    year: "2008",
    description:
      "Pioneered the first Hip-Hop Strings arrangement. Orchestrated the string arrangements for Mos Def Live at Carnegie Hall — the venue's first full Hip Hop show, a landmark event in the genre's history.",
    descMobile:
      "Pioneered the first Hip-Hop Strings arrangement. Orchestrated the string arrangements for Mos Def Live at Carnegie Hall — the venue's first full Hip Hop show.",
  },
  {
    title: "94th Academy Awards",
    year: "2022",
    description:
      "Directed as Lead Orchestrator and Conductor for the 2022 Oscars. Orchestrated and co-conducted the first All-African-American orchestra in Academy Awards history.",
    descMobile:
      "Directed and orchestrated the first All-African-American orchestra in Academy Awards history.",
  },
  {
    title: "Hollywood Bowl",
    year: "2022",
    description:
      "Directed as Conductor and Lead Orchestrator for CNN's nationally televised Juneteenth Celebration. Pioneered the first All-African American orchestra to perform on the Hollywood Bowl stage — a historic evening of culture and history in Hollywood.",
    descMobile:
      "Directed CNN's Juneteenth Celebration — pioneered the first All-African American orchestra on the Hollywood Bowl stage.",
  },
  {
    title: "Houston Symphony",
    year: "2019",
    description:
      "Directed as Creative Director and Symphony Arranger for Common with the Houston Symphony — pioneered the first time Hip Hop was ever performed with the Houston Symphony.",
    descMobile:
      "Directed as Creative Director for Common with the Houston Symphony — pioneered the first Hip Hop performance with the Houston Symphony.",
  },
];

const AboutPage = () => {
  return (
    <>
      {/* PAGE HERO */}
      <section className="min-h-[60vh] flex flex-col justify-end px-6 md:px-10 pt-40 pb-20">
        <div className="max-w-[1200px] mx-auto w-full">
          <p className="section-label mb-6">The Journey</p>
          <h1 className="heading-xl max-w-[900px]">
            The Architect Between the Symphony and the Street.
          </h1>
        </div>
      </section>

      {/* BIO */}
      <section className="bg-bg py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-16 items-start">
            <ScrollReveal>
              <p className="body-lg mb-6 max-w-xl">
                Derrick Hodge does not simply play music — he architects sonic
                worlds. A visionary composer, musical director, bandleader,
                producer, bassist and advocate, Hodge has orchestrated some of
                music&apos;s most iconic albums, pioneered breakthrough
                orchestral arrangements and compositions, scored a commanding
                catalogue of film and television work, and constructed evocative
                sonic installations for prestigious cultural institutions — all
                while championing the next generation of emerging young
                musicians.
              </p>
              <p className="body-lg mb-6 max-w-xl">
                Two Grammys. Sundance Composer Fellow. Motif Award recipient.
                His foundational bassline on Common&apos;s <em>BE</em> has been
                officially enshrined as one of the Top 20 Basslines in Hip Hop
                History.
              </p>
              <p className="body-lg mb-6 max-w-xl">
                Hodge describes his life&apos;s work as &ldquo;speaking
                existence into possibility&rdquo; — a philosophy that fuels
                every composition, every collaboration, every stage he commands.
                Driven by a devotion to music rather than genre, he is an
                architect defined only by his multiplicity. As celebrated a
                composer as he is revered as one of the great bassists and
                musicians of his generation, he has earned critical acclaim
                across genres and mediums while cultivating a diverse and devoted
                global audience.
              </p>
              <p className="body-lg max-w-xl">
                Growing up just outside Philadelphia, Hodge&apos;s talent was
                quickly recognized by the luminaries of the city&apos;s neo-soul
                movement. While still in college, he anchored the sonic
                foundation for pioneers including Jill Scott, Maxwell, Floetry,
                Nas, Common, James Posyer and Musiq Soulchild — becoming the
                bass player and Musical Director who defined the movement&apos;s
                low end. Simultaneously, he was forging a parallel career in
                jazz circles alongside Terence Blanchard, Donald Byrd, Mulgrew
                Miller and Bootsie Barnes, while commanding a star position in
                his university&apos;s orchestra.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="w-full md:w-[440px] aspect-[4/5] shrink-0 rounded overflow-hidden">
                <Image
                  src="/images/derrick-hodge-2.jpg"
                  alt="Derrick Hodge"
                  width={440}
                  height={550}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 440px"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="bg-bg py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="section-label mb-16">Disciplines</p>
          </ScrollReveal>

          {/* Composer */}
          <ScrollReveal>
            <div className="border-t border-border py-16 md:py-20">
              <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16">
                <div>
                  <h2 className="heading-sm">Composer</h2>
                </div>
                <div>
                  <p className="body-lg mb-6">
                    Architected at the intersection of the concert hall and the
                    cinema, Hodge&apos;s compositional voice is singular. His
                    original orchestral works include <em>Mind of a Dreamer Suite</em>{" "}
                    and <em>Infinite Reflections</em> — compositions that fuse
                    hip-hop sensibility into symphonic structures with a fluency
                    that has made him one of the most sought-after voices
                    bridging both worlds.
                  </p>
                  <p className="body-lg mb-6">
                    He was commissioned by the Smithsonian&apos;s National
                    Museum of African American History and Culture to write the
                    installation music for their permanent exhibit{" "}
                    <em>The Power of Place</em>, exploring how Oak&apos;s Bluff
                    became a place of collective imagining, struggle,
                    achievement and freedom for a burgeoning African American
                    community. He went on to compose for{" "}
                    <em>Social Dance</em> and the <em>Making A Way</em> exhibit,
                    paying tribute to the creativity, agency and resilience with
                    which individual African Americans crafted opportunity in the
                    face of racial oppression.
                  </p>
                  <p className="body-lg">
                    As a Blue Note Recording Artist, Hodge has released three
                    critically acclaimed solo projects: <em>Live Today</em>{" "}
                    (2013), <em>The Second</em> (2016), and{" "}
                    <em>Color of Noize</em> (2020). His albums are rich, raw and
                    revelatory — reflecting everything from his roots in the
                    church to an undercurrent of hip-hop and eternal reverence
                    for melody and classical composition.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Arranger & Conductor */}
          <ScrollReveal>
            <div className="border-t border-border py-16 md:py-20">
              <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16">
                <div>
                  <h2 className="heading-sm">Arranger &amp; Conductor</h2>
                </div>
                <div>
                  <p className="body-lg mb-6">
                    Orchestrated and directed from the podium with an authority
                    few possess, Hodge commands unparalleled trust and admiration
                    among musicians — an expertise in his craft that has placed
                    him at the helm of a wealth of groundbreaking orchestral
                    projects.
                  </p>
                  <p className="body-lg mb-8">
                    Orchestrated and directed orchestral arrangements for the
                    94th Academy Awards, Grammy Awards 2022, Super Bowl LVI
                    &ldquo;Lift Every Voice&rdquo; performance, Atlanta Symphony
                    with Jeezy, National Symphony Orchestra with Nas, and LA
                    Philharmonic collaborations with H.E.R., Gwen Stefani, and
                    Christina Aguilera.
                  </p>
                  <p className="section-label mb-6">Select Symphonic Credits</p>
                  <div>
                    {symphonicCredits.map((credit, i) => (
                      <div key={i} className="credit-row">
                        <span className="text-text font-medium uppercase tracking-[0.05em]">
                          {credit.year}
                        </span>
                        <span className="text-text-secondary">{credit.desc}</span>
                        <span className="text-text-secondary text-right">
                          {credit.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Musical Director */}
          <ScrollReveal>
            <div className="border-t border-border py-16 md:py-20">
              <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16">
                <div>
                  <h2 className="heading-sm">Musical Director</h2>
                </div>
                <div>
                  <p className="body-lg mb-6">
                    Anchored at the helm for a decade of musical direction for
                    Maxwell (2009–2019), Hodge cemented his reputation as one of
                    the most trusted musical directors in the business. His
                    ability to translate an artist&apos;s vision into a cohesive
                    live experience — commanding arrangements, band dynamics, and
                    show flow — remains unmatched.
                  </p>
                  <p className="body-lg">
                    Beyond Maxwell, Hodge has directed the musical vision for
                    Jill Scott, Nas, Common, and other neo-soul and hip-hop
                    pioneers. As a performer, he has founded and anchored bands
                    and groups as diverse and influential as R+R=Now, the Robert
                    Glasper Experiment and The Blue Note All Stars, and as a
                    producer he has collaborated with icons including Quincy
                    Jones, Don Was and Common.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Film & Television */}
          <ScrollReveal>
            <div className="border-t border-border py-16 md:py-20">
              <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16">
                <div>
                  <h2 className="heading-sm">Film &amp; Television</h2>
                </div>
                <div>
                  <p className="body-lg mb-8">
                    Scored with a visionary&apos;s ear for cinematic
                    storytelling, Hodge&apos;s impressive portfolio of film
                    composition spans a wealth of small and big screen work. A
                    storytelling architect drawn to the cinema that chronicles
                    America&apos;s Blackness, he is an artist deftly attuned to
                    humanity — his music uniquely awake to the universal nuances
                    of the human experience.
                  </p>
                  <div>
                    {filmCredits.map((credit, i) => (
                      <div key={i} className="credit-row">
                        <span className="text-text font-medium uppercase tracking-[0.05em]">
                          {credit.year}
                        </span>
                        <span className="text-text-secondary">{credit.desc}</span>
                        <span className="text-text-secondary text-right">
                          {credit.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Community & Advocacy */}
          <ScrollReveal>
            <div className="border-t border-border py-16 md:py-20">
              <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16">
                <div>
                  <h2 className="heading-sm">Community &amp; Advocacy</h2>
                </div>
                <div>
                  <p className="body-lg mb-6">
                    Pioneered with purpose and championed with conviction —
                    Hodge is a Motif Award recipient, one of the nation&apos;s
                    highest honors for child advocacy. Throughout his life, he
                    has devoted himself to projects that elevate and animate the
                    African American legacy: the struggle but also — always — the
                    poetry and the triumph too. It is this visionary ability to
                    honor and advance both culture and people that is the
                    principal thread weaving together Hodge&apos;s work.
                  </p>
                  <p className="body-lg mb-6">
                    The Color of Noize project is Hodge&apos;s signature
                    concept-series, bringing together contrasting sounds, styles
                    and set-ups to create an immersive and inherently
                    transcendent audio-visual experience. It is also particularly
                    close to Hodge&apos;s heart as it opens up not just his
                    music, but also his mission: to create a new, free space for
                    music whilst also championing his community of both
                    established and emerging musicians.
                  </p>
                  <p className="body-lg">
                    More than an album, The Color of Noize is an ongoing
                    commitment to artistic excellence and inclusion, in
                    particular the creation of opportunities and broadening of
                    horizons for inner city youth. He first premiered the project
                    in 2019 as part of his Artist Residency at Monterey Jazz
                    Festival, where he brought together a collection of
                    musicians, some as young as 4, on stage with him to explore
                    his original compositions.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LEGACY OF FIRSTS */}
      <section className="bg-bg py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="section-label mb-12">Legacy of Firsts</p>
          </ScrollReveal>

          {milestones.map((milestone, i) => (
            <ScrollReveal key={milestone.title} delay={i * 0.05}>
              <div
                className={`border-t border-border py-6 md:py-8 ${
                  i === milestones.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="grid grid-cols-[1fr_auto] md:grid-cols-[200px_1fr_auto] gap-4 md:gap-8 items-start">
                  <h3 className="text-[15px] md:text-[17px] font-bold uppercase tracking-wide">
                    {milestone.title}
                  </h3>
                  <div className="hidden md:block">
                    <p className="text-[14px] text-text-secondary leading-[1.6]">
                      {milestone.description}
                    </p>
                  </div>
                  <span className="text-[13px] text-text-secondary uppercase tracking-wide text-right">
                    {milestone.year}
                  </span>
                </div>
                <p className="text-[14px] text-text-secondary leading-[1.6] mt-3 md:hidden">
                  {milestone.descMobile}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
