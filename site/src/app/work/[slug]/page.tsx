import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getAllSlugs, getProjectBySlug } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => {
  return getAllSlugs().map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description[0],
  };
};

const ProjectPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const isAlbum = project.layout === "album";

  return (
    <>
      {/* HERO */}
      <section className="min-h-[60vh] flex flex-col justify-end px-6 md:px-10 pt-40 pb-20">
        <div className="max-w-[1200px] mx-auto w-full">
          <p className="section-label mb-6">{project.label}</p>
          <h1 className="heading-xl max-w-[900px]">{project.title}</h1>
          {project.heroDescription && (
            <p className="text-[14px] md:text-[15px] text-text-secondary leading-[1.7] mt-8 max-w-lg">
              {project.heroDescription}
            </p>
          )}
        </div>
      </section>

      {/* IMAGE */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            {isAlbum && project.albumArt ? (
              <div className="max-w-[480px] mx-auto">
                <div className="aspect-square rounded overflow-hidden">
                  <Image
                    src={project.albumArt}
                    alt={project.title}
                    width={480}
                    height={480}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 480px) 100vw, 480px"
                    priority
                  />
                </div>
              </div>
            ) : (
              <div className="aspect-[16/9] rounded overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            {project.description.map((paragraph, i) => (
              <p key={i} className="body-lg mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </ScrollReveal>

          {/* CREDITS */}
          {project.credits.length > 0 && (
            <ScrollReveal>
              <div className="mt-16 border-t border-border pt-10">
                <p className="section-label mb-8">Credits</p>
                {project.credits.map((credit) => (
                  <div
                    key={credit.label}
                    className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-4 py-3 border-b border-border last:border-0"
                  >
                    <span className="text-[12px] text-text-secondary uppercase tracking-[0.08em] font-medium">
                      {credit.label}
                    </span>
                    <span className="text-[14px] text-text">
                      {credit.value}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* STREAMING LINKS */}
          {project.streamingLinks.length > 0 && (
            <ScrollReveal>
              <div className="mt-16 border-t border-border pt-10">
                <p className="section-label mb-8">Listen</p>
                <div className="flex flex-wrap gap-4">
                  {project.streamingLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill"
                    >
                      {link.platform === "apple-music"
                        ? "Apple Music"
                        : "Spotify"}{" "}
                      &rarr;
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* BACK LINK */}
      <section className="px-6 md:px-10 pb-20 md:pb-32">
        <div className="max-w-[800px] mx-auto">
          <Link href="/work" className="btn-pill">
            &larr; Back to The Archive
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
