import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import MotionDiv from "@/components/MotionDiv";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-white py-28 md:py-32">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-rose-100/30 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">
        {/* HEADING */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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

            <h2
              className="
                mt-6
                max-w-4xl
                text-4xl
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                text-black
                md:text-6xl
              "
            >
              Digital experiences
              <br />

              <span className="text-black/30">
                built with purpose.
              </span>
            </h2>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="lg:pb-2"
          >
            <p className="max-w-xl text-lg leading-8 text-black/55">
              Explore selected projects where strategy, design and
              technology come together to create meaningful digital
              experiences.
            </p>

            <Link
              href="/work"
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
              View all case studies

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </MotionDiv>
        </div>

        {/* PROJECTS */}
        <div className="mt-16 space-y-8">
          {projects.slice(0, 3).map((project, index) => (
            <MotionDiv
              key={project.slug}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="
                  group
                  grid
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-black/10
                  bg-[#fafafa]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_35px_100px_rgba(0,0,0,0.10)]
                  lg:grid-cols-[1.15fr_0.85fr]
                "
              >
                {/* IMAGE AREA */}
                <div
                  className="
                    relative
                    min-h-[360px]
                    overflow-hidden
                    bg-neutral-100
                    lg:min-h-[520px]
                  "
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.03]
                    "
                    sizes="
                      (max-width: 1024px) 100vw,
                      60vw
                    "
                  />

                  {/* IMAGE OVERLAY */}
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

                  {/* NUMBER */}
                  <div
                    className="
                      absolute
                      left-6
                      top-6
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-black/30
                      text-xs
                      font-semibold
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className="
                    flex
                    flex-col
                    justify-between
                    p-7
                    sm:p-9
                    lg:p-12
                  "
                >
                  <div>
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

                    <h3
                      className="
                        mt-5
                        text-4xl
                        font-semibold
                        tracking-[-0.04em]
                        text-black
                        md:text-5xl
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-6
                        max-w-md
                        text-base
                        leading-8
                        text-black/50
                      "
                    >
                      {project.description}
                    </p>

                    {project.services &&
                      project.services.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-2">
                          {project.services
                            .slice(0, 4)
                            .map((service) => (
                              <span
                                key={service}
                                className="
                                  rounded-full
                                  border
                                  border-black/10
                                  bg-white
                                  px-3.5
                                  py-2
                                  text-xs
                                  font-medium
                                  text-black/50
                                "
                              >
                                {service}
                              </span>
                            ))}
                        </div>
                      )}
                  </div>

                  {/* VIEW CASE STUDY */}
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
                    <span className="text-sm font-semibold text-black">
                      View case study
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
              </Link>
            </MotionDiv>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <MotionDiv
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-6
            rounded-[30px]
            bg-black
            px-8
            py-8
            text-white
            md:flex-row
            md:items-center
            md:justify-between
            lg:px-10
          "
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-orange-400">
              Have an idea?
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Your project could be next.
            </h3>
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
              px-6
              py-3.5
              text-sm
              font-semibold
              text-black
              transition
              hover:bg-orange-500
              hover:text-white
            "
          >
            Start a project

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}