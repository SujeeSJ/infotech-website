import MotionDiv from "@/components/MotionDiv";
import type { Project } from "@/data/projects";

import {
  Compass,
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  Sparkles,
} from "lucide-react";

export default function Process({
  project,
}: {
  project: Project;
}) {
  const icons = [
    Compass,
    Lightbulb,
    Palette,
    Code2,
    Rocket,
  ];

  return (
    <section className="relative overflow-hidden bg-white py-28 md:py-32">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-40 top-16 h-[420px] w-[420px] rounded-full bg-orange-100/40 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-rose-100/30 blur-[140px]" />

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
              Our Process
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
              From concept
              <br />

              <span className="text-black/30">
                to digital reality.
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
              A structured process combining discovery, planning,
              design, development and refinement throughout the project.
            </p>
          </MotionDiv>

        </div>



        {/* TIMELINE */}
        <div className="relative mt-16">

          {/* DESKTOP LINE */}
          <div
            className="
              absolute
              left-[25px]
              top-6
              hidden
              h-[calc(100%-48px)]
              w-px
              bg-gradient-to-b
              from-orange-400
              via-black/10
              to-transparent
              md:block
            "
          />


          <div className="space-y-6">

            {project.process.map((step, index) => {
              const Icon = icons[index % icons.length];

              return (
                <MotionDiv
                  key={`${step}-${index}`}
                  initial={{
                    opacity: 0,
                    x: -28,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  className="
                    relative
                    grid
                    gap-5
                    md:grid-cols-[64px_1fr]
                    md:gap-8
                  "
                >

                  {/* TIMELINE NODE */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-[52px]
                      w-[52px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/10
                      bg-black
                      text-white
                      shadow-[0_0_0_8px_rgba(255,255,255,1)]
                    "
                  >
                    <Icon size={18} />
                  </div>


                  {/* CARD */}
                  <div
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[30px]
                      border
                      border-black/10
                      bg-[#fafafa]
                      p-7
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:bg-white
                      hover:shadow-[0_30px_90px_rgba(0,0,0,0.07)]
                      md:p-8
                    "
                  >

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-48
                        w-48
                        rounded-full
                        bg-orange-100
                        opacity-0
                        blur-3xl
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />


                    <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                      <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                          Step {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                          {step}
                        </h3>

                      </div>


                      <p className="max-w-xl text-sm leading-7 text-black/45">
                        {getStepDescription(step)}
                      </p>

                    </div>

                  </div>

                </MotionDiv>
              );
            })}

          </div>

        </div>



        {/* BOTTOM STRIP */}
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
            mt-10
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
              Collaborative By Design
            </p>

            <p className="mt-2 text-sm text-white/50">
              Each stage is shaped around the project, not forced into a fixed template.
            </p>
          </div>

          <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">
            Discover → Design → Build → Launch
          </p>
        </MotionDiv>

      </div>

    </section>
  );
}


function getStepDescription(step: string) {
  const normalized = step.toLowerCase();

  if (normalized.includes("discover") || normalized.includes("research")) {
    return "Understanding the business, audience, goals and project context before defining the direction.";
  }

  if (
    normalized.includes("strategy") ||
    normalized.includes("planning")
  ) {
    return "Shaping the structure, priorities and user journey around the business goals.";
  }

  if (
    normalized.includes("ux") ||
    normalized.includes("design") ||
    normalized.includes("interface")
  ) {
    return "Translating the strategy into clear user journeys, interfaces and visual decisions.";
  }

  if (
    normalized.includes("development") ||
    normalized.includes("build")
  ) {
    return "Turning the approved experience into a responsive and maintainable digital product.";
  }

  if (
    normalized.includes("launch") ||
    normalized.includes("optimization") ||
    normalized.includes("responsive")
  ) {
    return "Testing, refining and preparing the experience for reliable use across devices.";
  }

  return "A focused project stage designed around the needs of the product and its users.";
}