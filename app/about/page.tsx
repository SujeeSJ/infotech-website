import type { Metadata } from "next";
import Link from "next/link";

import MotionDiv from "@/components/MotionDiv";

import {
  ArrowUpRight,
  Building2,
  Code2,
  Globe2,
  GraduationCap,
  Lightbulb,
  Sparkles,
  Users,
} from "lucide-react";


/* ----------------------------------
   ABOUT PAGE SEO
----------------------------------- */

const title =
  "About Infinotech | Digital Technology & Product Studio";

const description =
  "Learn about Infinotech, a digital technology brand under Apexx Private Limited focused on digital products, software, AI, engineering and practical technology talent development.";


export const metadata: Metadata = {
  title,

  description,

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title,
    description,
    url: "/about",
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
   ABOUT PAGE STRUCTURED DATA
----------------------------------- */

const aboutSchema = {
  "@context": "https://schema.org",

  "@type": "AboutPage",

  name: "About Infinotech",

  url: "https://infinotech.com/about",

  description,

  mainEntity: {
    "@type": "Organization",

    name: "Infinotech",

    url: "https://infinotech.com",

    logo:
      "https://infinotech.com/logo/infinotech-icon.png",

    foundingDate: "2020-12-08",

    telephone: "+94754546492",

    parentOrganization: {
      "@type": "Organization",
      name: "Apexx Private Limited",
    },

    description:
      "Infinotech is a digital technology brand focused on digital products, software engineering, AI, automation and practical technology development.",
  },
};


/* ----------------------------------
   VALUES
----------------------------------- */

const values = [
  {
    icon: Lightbulb,

    title: "Innovation",

    text:
      "Exploring modern technologies and practical ideas that can create meaningful digital solutions.",
  },

  {
    icon: Code2,

    title: "Engineering",

    text:
      "Building digital products with a focus on usability, maintainability and long-term value.",
  },

  {
    icon: Users,

    title: "Partnership",

    text:
      "Working closely with clients to understand the business before deciding what should be designed or built.",
  },

  {
    icon: GraduationCap,

    title: "Talent Development",

    text:
      "Providing internship training and practical exposure that helps future technology professionals gain real-world experience.",
  },
];


/* ----------------------------------
   FOCUS AREAS
----------------------------------- */

const focusAreas = [
  "Web Platforms",
  "Mobile Applications",
  "Custom Software",
  "UI/UX Design",
  "Artificial Intelligence",
  "Automation",
  "Cloud & DevOps",
  "Data Solutions",
  "E-Commerce",
  "Digital Growth",
];


/* ----------------------------------
   ABOUT PAGE
----------------------------------- */

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-black">

      {/* STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            aboutSchema
          ),
        }}
      />



      {/* HERO */}

      <section className="relative overflow-hidden pb-28 pt-40">

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[8%] top-20 h-[480px] w-[480px] rounded-full bg-orange-100/70 blur-[140px]" />


          <div className="absolute right-[8%] top-32 h-[450px] w-[450px] rounded-full bg-rose-100/40 blur-[140px]" />


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
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
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

              About Infinotech
            </div>


            <h1
              className="
                mt-8
                max-w-6xl
                text-[clamp(3.8rem,7vw,7.5rem)]
                font-semibold
                leading-[0.91]
                tracking-[-0.06em]
              "
            >
              Infinite ideas.
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
                Engineered into reality.
              </span>

            </h1>



            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">

              <p className="max-w-3xl text-lg leading-8 text-black/55 md:text-xl">
                Infinotech is a digital technology brand under Apexx
                Private Limited, focused on creating modern digital
                products while also helping future technology
                professionals gain practical experience.
              </p>


              <div className="flex items-center gap-4 lg:justify-end">

                <div className="h-px w-12 bg-black/15" />


                <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/35">
                  Since 8 December 2020
                </p>

              </div>

            </div>

          </MotionDiv>

        </div>

      </section>



      {/* COMPANY IDENTITY */}

      <section className="border-y border-black/10 bg-[#fafafa] py-24">

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
              rounded-[34px]
              border
              border-black/10
              bg-white
              p-8
              shadow-[0_30px_90px_rgba(0,0,0,0.06)]
              md:p-12
            "
          >

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-100 blur-[90px]" />



            <div className="relative grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

              <div>

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-black
                    text-white
                  "
                >
                  <Building2 size={22} />
                </div>


                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                  Company
                </p>


                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Apexx Private Limited
                </h2>


                <p className="mt-3 text-sm text-black/45">
                  Infinotech established 8 December 2020
                </p>

              </div>



              <div>

                <p
                  className="
                    max-w-3xl
                    text-2xl
                    font-medium
                    leading-[1.5]
                    tracking-[-0.025em]
                    text-black/75
                    md:text-3xl
                  "
                >
                  We believe technology should solve meaningful problems,
                  simplify experiences and give businesses stronger ways
                  to operate, communicate and grow.
                </p>

              </div>

            </div>

          </MotionDiv>

        </div>

      </section>



      {/* OUR STORY */}

      <section className="relative overflow-hidden py-28 md:py-32">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">

            <MotionDiv
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-500">
                Our Story
              </p>


              <h2
                className="
                  mt-6
                  max-w-3xl
                  text-4xl
                  font-semibold
                  leading-[1]
                  tracking-[-0.045em]
                  md:text-6xl
                "
              >
                Growing through
                <br />

                <span className="text-black/30">
                  technology and learning.
                </span>

              </h2>

            </MotionDiv>



            <MotionDiv
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                rounded-[32px]
                border
                border-black/10
                bg-[#fafafa]
                p-8
                md:p-10
              "
            >

              <p className="text-lg leading-8 text-black/55">
                Infinotech was established in December 2020 with a focus
                on technology, digital products and practical innovation.
              </p>


              <p className="mt-6 text-lg leading-8 text-black/55">
                Our approach combines business understanding, product
                thinking, design and engineering to shape solutions
                around the needs of each project.
              </p>


              <p className="mt-6 text-lg leading-8 text-black/55">
                Alongside our client work, talent development remains an
                important part of Infinotech through internship training
                and practical exposure to real-world technology work.
              </p>

            </MotionDiv>

          </div>

        </div>

      </section>



      {/* VALUES */}

      <section className="relative overflow-hidden bg-[#f7f7f7] py-28 md:py-32">

        <div className="pointer-events-none absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-orange-100/50 blur-[140px]" />



        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-500">
                What Drives Us
              </p>


              <h2
                className="
                  mt-6
                  text-4xl
                  font-semibold
                  leading-[1]
                  tracking-[-0.045em]
                  md:text-6xl
                "
              >
                Principles behind

                <span className="text-black/30">
                  {" "}
                  the work.
                </span>

              </h2>

            </div>



            <p className="max-w-xl text-lg leading-8 text-black/50">
              Strong digital products come from more than code. They
              require curiosity, thoughtful engineering, collaboration
              and continuous learning.
            </p>

          </div>



          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {values.map(
              (value, index) => {

                const Icon =
                  value.icon;


                return (

                  <MotionDiv
                    key={value.title}
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
                    transition={{
                      delay:
                        index *
                        0.07,
                    }}
                    className="
                      group
                      rounded-[30px]
                      border
                      border-black/10
                      bg-white
                      p-7
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:shadow-[0_30px_90px_rgba(0,0,0,0.07)]
                    "
                  >

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-black/10
                        bg-[#fafafa]
                        transition
                        group-hover:border-orange-200
                        group-hover:bg-orange-50
                        group-hover:text-orange-500
                      "
                    >
                      <Icon size={20} />
                    </div>


                    <h3 className="mt-8 text-xl font-semibold">
                      {value.title}
                    </h3>


                    <p className="mt-4 text-sm leading-7 text-black/50">
                      {value.text}
                    </p>

                  </MotionDiv>

                );
              }
            )}

          </div>

        </div>

      </section>



      {/* TALENT DEVELOPMENT */}

      <section className="bg-white py-28 md:py-32">

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
              p-8
              text-white
              md:p-12
              lg:p-16
            "
          >

            <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full bg-orange-500/25 blur-[110px]" />



            <div className="relative grid gap-14 lg:grid-cols-2">

              <div>

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                  "
                >
                  <GraduationCap size={21} />
                </div>


                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                  Talent Development
                </p>


                <h2
                  className="
                    mt-6
                    text-4xl
                    font-semibold
                    leading-[1]
                    tracking-[-0.045em]
                    md:text-5xl
                  "
                >
                  Experience beyond

                  <span className="text-white/30">
                    {" "}
                    the classroom.
                  </span>

                </h2>

              </div>



              <div className="lg:self-end">

                <p className="text-lg leading-8 text-white/55">
                  Infinotech provides internship training and practical
                  exposure designed to help developing technology
                  professionals understand how real digital projects are
                  approached.
                </p>


                <p className="mt-5 text-lg leading-8 text-white/55">
                  The focus is on learning through practical experience,
                  collaboration and exposure to modern digital work.
                </p>

              </div>

            </div>

          </MotionDiv>

        </div>

      </section>



      {/* TECHNOLOGY FOCUS */}

      <section className="border-y border-black/10 bg-[#fafafa] py-24">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

            <div>

              <Globe2
                size={28}
                className="text-orange-500"
              />


              <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
                Our technology focus
              </h2>


              <p className="mt-4 max-w-md text-sm leading-7 text-black/50">
                Capabilities designed around modern digital businesses
                and evolving technology needs.
              </p>

            </div>



            <div className="flex flex-wrap gap-3">

              {focusAreas.map(
                (item) => (

                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-black/10
                      bg-white
                      px-4
                      py-2.5
                      text-sm
                      font-medium
                      text-black/55
                    "
                  >
                    {item}
                  </span>

                )
              )}

            </div>

          </div>

        </div>

      </section>



      {/* CTA */}

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

            <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full bg-orange-500/25 blur-[110px]" />



            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                  Work With Infinotech
                </p>


                <h2
                  className="
                    mt-6
                    max-w-5xl
                    text-4xl
                    font-semibold
                    leading-[1]
                    tracking-[-0.045em]
                    md:text-6xl
                  "
                >
                  Let&apos;s turn the next idea
                  <br />

                  <span className="text-white/30">
                    into something real.
                  </span>

                </h2>

              </div>



              <div className="flex flex-wrap gap-3">

                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
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


                <a
                  href="tel:+94754546492"
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-white/15
                    bg-white/5
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-white/10
                  "
                >
                  +94 75 454 6492
                </a>

              </div>

            </div>

          </MotionDiv>

        </div>

      </section>

    </main>
  );
}