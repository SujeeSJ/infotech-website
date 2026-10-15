import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";

const SITE_URL = "https://infinotech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${SITE_URL}/services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/work`,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${SITE_URL}/ai-lab`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];


  const projectPages: MetadataRoute.Sitemap =
    projects.map((project) => ({
      url: `${SITE_URL}/work/${project.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }));


  return [
    ...mainPages,
    ...projectPages,
  ];
}