import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { projects, albums } from "@/data/projects";

export const metadata: Metadata = {
  title: "The Archive",
  description:
    "Explore Derrick Hodge's archive of groundbreaking orchestral firsts, symphonic premieres, film scores, and three critically acclaimed albums on Blue Note Records.",
};

const WorkPage = () => {
  return (
    <>
      {/* PAGE HERO */}
      <section className="min-h-[60vh] flex flex-col justify-end px-6 md:px-10 pt-40 pb-20">
        <div className="max-w-[1200px] mx-auto w-full">
          <p className="section-label mb-6">The Archive</p>
          <h1 className="heading-xl max-w-[900px]">
            Every Stage. Every Score. Every First.
          </h1>
          <p className="text-[14px] text-text-secondary leading-[1.6] mt-8 max-w-md uppercase tracking-wide">
            Two-time Grammy-winning musical architect. Sundance Composer Fellow.
            A body of work spanning orchestral premieres, cinematic scores,
            cultural installations, and genre-defining albums.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-bg py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="section-label mb-12">Projects</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.05}>
                <Link
                  href={`/work/${project.slug}`}
                  className="project-card block"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-card">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={375}
                      className="project-img w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="section-label mb-2">{project.label}</p>
                    <h3 className="text-[18px] md:text-[22px] font-bold uppercase tracking-[-0.01em] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[13px] text-text-secondary leading-[1.6]">
                      {project.excerpt}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOGRAPHY */}
      <section className="bg-bg py-24 md:py-32 px-6 md:px-10 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="section-label mb-12">Discography</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {albums.filter((a) => ["color-of-noize-album", "the-second", "live-today"].includes(a.slug)).map((album, i) => {
              const year = album.credits.find((c) => c.label === "Year")?.value ?? "";
              return (
                <ScrollReveal key={album.title} delay={i * 0.1}>
                  <Link href={`/work/${album.slug}`} className="group block">
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
                      {year} &middot; Blue Note Records
                    </p>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkPage;
