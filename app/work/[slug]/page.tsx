import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import Hero from "@/components/case-study/Hero";
import Snapshot from "@/components/case-study/Snapshot";
import Challenge from "@/components/case-study/Challenge";
import Strategy from "@/components/case-study/Strategy";
import Features from "@/components/case-study/Features";
import Gallery from "@/components/case-study/Gallery";
import Process from "@/components/case-study/Process";
import CTA from "@/components/case-study/CTA";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};


/* -----------------------------------------
   CREATE STATIC PROJECT ROUTES
----------------------------------------- */

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}


/* -----------------------------------------
   PROJECT SEO
----------------------------------------- */

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found | Infinotech",
    };
  }

  return {
    title: `${project.title} Case Study | Infinotech`,

    description: project.description,
  };
}


/* -----------------------------------------
   PROJECT PAGE
----------------------------------------- */

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="overflow-hidden bg-white text-black">

      {/* PROJECT HERO */}
      <Hero project={project} />


      {/* PROJECT OVERVIEW */}
      <Snapshot project={project} />


      {/* BUSINESS CHALLENGE */}
      <Challenge project={project} />


      {/* STRATEGY & SOLUTION */}
      <Strategy project={project} />


      {/* KEY EXPERIENCE FEATURES */}
      <Features project={project} />


      {/* UI / RESPONSIVE SHOWCASE */}
      <Gallery project={project} />


      {/* PROJECT PROCESS */}
      <Process project={project} />


      {/* FINAL CTA */}
      <CTA />

    </main>
  );
}