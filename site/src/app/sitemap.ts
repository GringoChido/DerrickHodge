import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/projects";

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = "https://derrickhodge.com";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/work`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    {
      url: `${baseUrl}/color-of-noize`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];

  const projectPages = getAllSlugs().map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
};

export default sitemap;
