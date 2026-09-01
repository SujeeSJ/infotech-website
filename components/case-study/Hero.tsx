import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import MotionDiv from "@/components/MotionDiv";
import type { Project } from "@/data/projects";

export default function Hero({
  project,
}: {
  project: Project;
}) {
  const websiteLabel = project.website
    ?.replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  return (
    <section className="relative overflow-hidden bg-white pb-28 pt-36 md:pb-32 md:pt-40">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[10%] top-28 h-[420px] w-[420px] rounded-full bg-orange-100/70 blur-[130px]" />

        <div className="absolute right-[5%] top-40 h-[450px] w-[450px] rounded-full bg-rose-100/40 blur-[140px]" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)]
            bg-[size:72px_72px]
            [mask-image:linear-gradient(to_bottom,black,transparent_92%)]
          "
        />

      </div>



      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

        {/* CATEGORY */}
        <MotionDiv
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.55,
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

            {project.category}
          </div>

        </MotionDiv>



        {/* TITLE AREA */}
        <div className="mt-9 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

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
              delay: 0.08,
            }}
          >

            <h1
              className="
                max-w-5xl
                text-[clamp(4rem,8vw,8rem)]
                font-semibold
                leading-[0.88]
                tracking-[-0.065em]
                text-black
              "
            >
              {project.title}
            </h1>


            {/* SERVICES */}
            <div className="mt-8 flex flex-wrap gap-2">

              {project.services.slice(0, 4).map((service) => (

                <span
                  key={service}
                  className="
                    rounded-full
                    border
                    border-black/10
                    bg-white/80
                    px-4
                    py-2
                    text-xs
                    font-medium
                    text-black/55
                    backdrop-blur
                  "
                >
                  {service}
                </span>

              ))}

            </div>

          </MotionDiv>



          <MotionDiv
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >

            <p className="max-w-xl text-lg leading-8 text-black/55 md:text-xl">
              {project.description}
            </p>


            {/* PROJECT META */}
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-black/10 pt-6">

              <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/30">
                  Industry
                </p>

                <p className="mt-2 text-sm font-medium text-black/75">
                  {project.industry}
                </p>

              </div>


              <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/30">
                  Year
                </p>

                <p className="mt-2 text-sm font-medium text-black/75">
                  {project.year}
                </p>

              </div>

            </div>


            {project.website && (
              <Link
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-black
                "
              >
                Visit live project

                <ExternalLink
                  size={15}
                  className="
                    transition-transform
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            )}

          </MotionDiv>

        </div>



        {/* WEBSITE SHOWCASE */}
        <MotionDiv
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.985,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.28,
          }}
          className="relative mt-20 md:mt-24"
        >

          {/* OUTER FRAME */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-black/10
              bg-[#eeeeee]
              p-2
              shadow-[0_45px_140px_rgba(0,0,0,0.15)]
              sm:rounded-[40px]
              sm:p-4
            "
          >

            {/* BROWSER */}
            <div
              className="
                overflow-hidden
                rounded-[26px]
                border
                border-black/10
                bg-white
                sm:rounded-[30px]
              "
            >

              {/* BROWSER BAR */}
              <div
                className="
                  flex
                  items-center
                  gap-4
                  border-b
                  border-black/10
                  bg-[#fafafa]
                  px-4
                  py-4
                  sm:px-6
                "
              >

                <div className="flex shrink-0 gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />

                  <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />

                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                </div>


                <div
                  className="
                    mx-auto
                    max-w-[420px]
                    flex-1
                    truncate
                    rounded-full
                    border
                    border-black/5
                    bg-white
                    px-4
                    py-2
                    text-center
                    text-[10px]
                    text-black/35
                    sm:text-xs
                  "
                >
                  {websiteLabel || project.title}
                </div>


                <div className="hidden w-[52px] sm:block" />

              </div>



              {/* PROJECT IMAGE */}
              <div
                className="
                  relative
                  aspect-[16/10]
                  min-h-[340px]
                  overflow-hidden
                  bg-neutral-100
                  md:min-h-[580px]
                  xl:min-h-[680px]
                "
              >

                <Image
                  src={project.image}
                  alt={`${project.title} website experience`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1400px) 90vw,
                    1300px
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-32
                    bg-gradient-to-t
                    from-black/15
                    to-transparent
                  "
                />

              </div>

            </div>

          </div>



          {/* FLOATING LEFT CARD */}
          <MotionDiv
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
            }}
            className="
              absolute
              -left-5
              bottom-20
              hidden
              rounded-[22px]
              border
              border-black/10
              bg-white/95
              px-5
              py-4
              shadow-xl
              backdrop-blur-xl
              lg:block
              xl:-left-8
            "
          >

            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/30">
              Experience
            </p>

            <p className="mt-2 text-sm font-semibold">
              {project.industry}
            </p>

          </MotionDiv>



          {/* FLOATING RIGHT CARD */}
          <MotionDiv
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
              absolute
              -right-5
              top-24
              hidden
              rounded-[22px]
              border
              border-black/10
              bg-black
              px-5
              py-4
              text-white
              shadow-xl
              lg:block
              xl:-right-8
            "
          >

            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
              Project Focus
            </p>

            <p className="mt-2 text-sm font-semibold">
              Digital Experience
            </p>

          </MotionDiv>

        </MotionDiv>



        {/* NEXT SECTION INDICATOR */}
        <MotionDiv
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="
            mt-10
            flex
            items-center
            justify-between
            border-b
            border-black/10
            pb-6
          "
        >

          <p className="text-xs uppercase tracking-[0.18em] text-black/30">
            Explore the case study
          </p>


          <div className="flex items-center gap-3">

            <span className="text-xs text-black/35">
              Scroll
            </span>

            <ArrowUpRight
              size={14}
              className="rotate-[135deg] text-orange-500"
            />

          </div>

        </MotionDiv>

      </div>

    </section>
  );
}