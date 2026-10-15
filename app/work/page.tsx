import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import MotionDiv from "@/components/MotionDiv";
import { projects } from "@/data/projects";


/* ----------------------------------
   WORK PAGE SEO
----------------------------------- */

const title =
  "Work & Case Studies | Digital Products by Infinotech";

const description =
  "Explore selected Infinotech projects and case studies across websites, digital experiences, software, mobile and technology solutions.";


export const metadata: Metadata = {
  title,

  description,

  alternates: {
    canonical: "/work",
  },

  openGraph: {
    title,
    description,
    url: "/work",
    type: "website",
    siteName: "Infinotech",
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};


/* ----------------------------------
   PROJECT LIST STRUCTURED DATA
----------------------------------- */

const projectsSchema = {
  "@context": "https://schema.org",

  "@type": "ItemList",

  name: "Infinotech Work & Case Studies",

  description,

  itemListElement: projects.map(
    (project, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: project.title,

      url: `https://infinotech.com/work/${project.slug}`,
    })
  ),
};


/* ----------------------------------
   WORK PAGE
----------------------------------- */

export default function WorkPage() {
  return (
    <main className="overflow-hidden bg-white text-black">

      {/* STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            projectsSchema
          ),
        }}
      />



      {/* HERO */}

      <section className="relative overflow-hidden pb-28 pt-40">

        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[8%] top-20 h-[430px] w-[430px] rounded-full bg-orange-100/70 blur-[130px]" />

          <div className="absolute right-[5%] top-24 h-[450px] w-[450px] rounded-full bg-rose-100/45 blur-[140px]" />

          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)]
              bg-[size:72px_72px]
              [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
            "
          />

        </div>


        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

          <MotionDiv
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
            }}
          >

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-orange-200
                bg-orange-50
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-orange-600
              "
            >
              <Sparkles size={13} />

              Selected Work
            </div>


            <h1
              className="
                mt-8
                max-w-6xl
                text-[clamp(3.8rem,7vw,7.5rem)]
                font-semibold
                leading-[0.91]
                tracking-[-0.06em]
                text-black
              "
            >
              Ideas transformed
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-orange-500
                  via-rose-500
                  to-orange-400
                  bg-clip-text
                  text-transparent
                "
              >
                into digital products.
              </span>

            </h1>


            <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">

              <p className="max-w-3xl text-lg leading-8 text-black/55 md:text-xl">
                Explore selected Infinotech projects and see how strategy,
                user experience and technology come together to solve
                real business challenges.
              </p>


              <div className="flex items-center gap-4 lg:justify-end">

                <div className="h-px w-12 bg-black/15" />


                <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/35">
                  Strategy • Design • Engineering
                </p>

              </div>

            </div>

          </MotionDiv>

        </div>

      </section>



      {/* PROJECTS */}

      <section className="relative bg-[#fafafa] py-24 md:py-32">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

          <div className="space-y-10">

            {projects.map(
              (project, index) => (

                <MotionDiv
                  key={project.slug}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                >

                  <Link
                    href={`/work/${project.slug}`}
                    className="
                      group
                      block
                      overflow-hidden
                      rounded-[36px]
                      border
                      border-black/10
                      bg-white
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:shadow-[0_35px_100px_rgba(0,0,0,0.10)]
                    "
                  >

                    <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

                      {/* CONTENT */}

                      <div
                        className="
                          order-2
                          flex
                          flex-col
                          justify-between
                          p-8
                          sm:p-10
                          lg:order-1
                          lg:p-12
                          xl:p-14
                        "
                      >

                        <div>

                          {/* NUMBER + CATEGORY */}

                          <div className="flex items-center justify-between">

                            <p
                              className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-orange-500
                              "
                            >
                              {project.category}
                            </p>


                            <p className="text-xs font-medium text-black/25">
                              {String(
                                index + 1
                              ).padStart(
                                2,
                                "0"
                              )}
                            </p>

                          </div>


                          <h2
                            className="
                              mt-7
                              text-4xl
                              font-semibold
                              tracking-[-0.04em]
                              text-black
                              md:text-5xl
                            "
                          >
                            {project.title}
                          </h2>


                          <p
                            className="
                              mt-6
                              max-w-lg
                              text-base
                              leading-8
                              text-black/50
                            "
                          >
                            {project.description}
                          </p>



                          {/* PROJECT META */}

                          <div
                            className="
                              mt-9
                              grid
                              grid-cols-2
                              gap-4
                              border-y
                              border-black/10
                              py-6
                            "
                          >

                            <div>

                              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/30">
                                Client
                              </p>


                              <p className="mt-2 text-sm font-medium">
                                {project.client}
                              </p>

                            </div>


                            <div>

                              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/30">
                                Year
                              </p>


                              <p className="mt-2 text-sm font-medium">
                                {project.year}
                              </p>

                            </div>

                          </div>



                          {/* SERVICES */}

                          <div className="mt-7 flex flex-wrap gap-2">

                            {project.services
                              .slice(0, 4)
                              .map(
                                (service) => (

                                  <span
                                    key={service}
                                    className="
                                      rounded-full
                                      border
                                      border-black/10
                                      bg-[#fafafa]
                                      px-3.5
                                      py-2
                                      text-xs
                                      font-medium
                                      text-black/50
                                    "
                                  >
                                    {service}
                                  </span>

                                )
                              )}

                          </div>

                        </div>



                        {/* CASE STUDY LINK */}

                        <div
                          className="
                            mt-12
                            flex
                            items-center
                            justify-between
                            border-t
                            border-black/10
                            pt-7
                          "
                        >

                          <span className="text-sm font-semibold">
                            Explore case study
                          </span>


                          <div
                            className="
                              flex
                              h-12
                              w-12
                              items-center
                              justify-center
                              rounded-full
                              bg-black
                              text-white
                              transition-all
                              duration-300
                              group-hover:translate-x-1
                              group-hover:bg-orange-500
                            "
                          >
                            <ArrowRight size={18} />
                          </div>

                        </div>

                      </div>



                      {/* PROJECT VISUAL */}

                      <div
                        className="
                          order-1
                          relative
                          min-h-[380px]
                          overflow-hidden
                          bg-neutral-100
                          lg:order-2
                          lg:min-h-[620px]
                        "
                      >

                        <Image
                          src={project.image}
                          alt={`${project.title} project`}
                          fill
                          priority={
                            index === 0
                          }
                          className="
                            object-cover
                            object-center
                            transition-transform
                            duration-700
                            group-hover:scale-[1.025]
                          "
                          sizes="
                            (max-width: 1024px) 100vw,
                            60vw
                          "
                        />


                        {/* VISUAL OVERLAY */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/25
                            via-transparent
                            to-transparent
                          "
                        />


                        {/* FLOATING LABEL */}

                        <div
                          className="
                            absolute
                            bottom-6
                            left-6
                            rounded-2xl
                            border
                            border-white/15
                            bg-black/60
                            px-5
                            py-4
                            text-white
                            backdrop-blur-xl
                          "
                        >

                          <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                            Industry
                          </p>


                          <p className="mt-1 text-sm font-medium">
                            {project.industry}
                          </p>

                        </div>

                      </div>

                    </div>

                  </Link>

                </MotionDiv>

              )
            )}

          </div>



          {/* MORE WORK MESSAGE */}

          <MotionDiv
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              mt-10
              flex
              flex-col
              gap-5
              rounded-[28px]
              border
              border-black/10
              bg-white
              px-7
              py-7
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                More From Infinotech
              </p>


              <p className="mt-2 text-sm text-black/50">
                More projects and case studies will be added as our
                portfolio grows.
              </p>

            </div>


            <Link
              href="/contact"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-2
                text-sm
                font-semibold
                text-black
              "
            >
              Discuss your project

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

            </Link>

          </MotionDiv>

        </div>

      </section>



      {/* FINAL CTA */}

      <section className="bg-white py-24 md:py-32">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

          <MotionDiv
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              overflow-hidden
              rounded-[36px]
              bg-black
              px-8
              py-16
              text-white
              md:px-12
              md:py-20
              lg:px-16
            "
          >

            {/* GLOW */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full bg-orange-500/25 blur-[110px]" />


            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                  Your Idea Could Be Next
                </p>


                <h2
                  className="
                    mt-6
                    max-w-4xl
                    text-4xl
                    font-semibold
                    leading-[1]
                    tracking-[-0.045em]
                    md:text-6xl
                  "
                >
                  Have a project in mind?
                  <br />

                  <span className="text-white/30">
                    Let&apos;s build it together.
                  </span>

                </h2>


                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/45">
                  Tell us what you&apos;re trying to create, improve or
                  transform and we&apos;ll help shape the right digital
                  solution.
                </p>

              </div>


              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-black
                  transition
                  hover:-translate-y-1
                  hover:bg-orange-500
                  hover:text-white
                "
              >
                Start A Project

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </Link>

            </div>

          </MotionDiv>

        </div>

      </section>

    </main>
  );
}