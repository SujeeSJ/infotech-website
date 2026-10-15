import MotionDiv from "@/components/MotionDiv";
import type { Project } from "@/data/projects";

import {
  ArrowUpRight,
  Layers3,
  MonitorSmartphone,
  Route,
  Sparkles,
} from "lucide-react";

export default function Features({
  project,
}: {
  project: Project;
}) {
  /*
    If a future project has no features,
    don't render an empty section.
  */
  if (!project.features || project.features.length === 0) {
    return null;
  }

  const icons = [
    Layers3,
    MonitorSmartphone,
    Route,
    Sparkles,
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] py-28 md:py-32">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-orange-100/50 blur-[140px]" />

        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-rose-100/30 blur-[140px]" />

      </div>


      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">

          <MotionDiv
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
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

              Experience Design
            </div>


            <h2
              className="
                mt-7
                max-w-4xl
                text-4xl
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                text-black
                md:text-6xl
              "
            >
              Built around
              <br />

              <span className="text-black/30">
                the user experience.
              </span>
            </h2>

          </MotionDiv>


          <MotionDiv
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >

            <p className="max-w-xl text-lg leading-8 text-black/50">
              Key experience decisions were shaped around clarity,
              accessibility and presenting the business in a way that
              feels natural to its audience.
            </p>

          </MotionDiv>

        </div>



        {/* FEATURE GRID */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">

          {project.features.map((feature, index) => {

            const Icon = icons[index % icons.length];

            return (

              <MotionDiv
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                className="h-full"
              >

                <div
                  className="
                    group
                    relative
                    flex
                    min-h-[320px]
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-black/10
                    bg-white
                    p-7
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_30px_90px_rgba(0,0,0,0.08)]
                    sm:p-8
                    lg:p-9
                  "
                >

                  {/* HOVER GLOW */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-52
                      w-52
                      rounded-full
                      bg-orange-100
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />


                  <div className="relative flex h-full flex-col">

                    {/* TOP */}
                    <div className="flex items-start justify-between">

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
                          text-black
                          transition-all
                          duration-300
                          group-hover:border-orange-200
                          group-hover:bg-orange-50
                          group-hover:text-orange-500
                        "
                      >
                        <Icon size={20} />
                      </div>


                      <span
                        className="
                          text-xs
                          font-medium
                          text-black/25
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>



                    {/* TEXT */}
                    <div className="mt-auto pt-12">

                      <h3
                        className="
                          text-2xl
                          font-semibold
                          tracking-[-0.025em]
                          text-black
                        "
                      >
                        {feature.title}
                      </h3>


                      <p
                        className="
                          mt-4
                          max-w-xl
                          text-sm
                          leading-7
                          text-black/50
                        "
                      >
                        {feature.description}
                      </p>


                      <div
                        className="
                          mt-7
                          flex
                          items-center
                          gap-2
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                          text-black/30
                          transition-colors
                          group-hover:text-orange-500
                        "
                      >
                        Experience detail

                        <ArrowUpRight
                          size={14}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                          "
                        />
                      </div>

                    </div>

                  </div>

                </div>

              </MotionDiv>

            );
          })}

        </div>



        {/* BOTTOM STATEMENT */}
        <MotionDiv
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mt-8
            flex
            flex-col
            gap-4
            rounded-[28px]
            bg-black
            px-7
            py-7
            text-white
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
              Experience First
            </p>

            <p className="mt-2 text-sm text-white/55">
              Design decisions shaped around the business and its audience.
            </p>

          </div>


          <div className="flex items-center gap-3">

            <span className="h-2 w-2 rounded-full bg-orange-400" />

            <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/35">
              Strategy → UX → Interface
            </p>

          </div>

        </MotionDiv>

      </div>

    </section>
  );
}