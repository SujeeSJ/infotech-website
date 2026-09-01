import MotionDiv from "@/components/MotionDiv";
import type { Project } from "@/data/projects";

import {
  ArrowDownRight,
  Compass,
  Layers3,
  Sparkles,
  Workflow,
} from "lucide-react";

export default function Strategy({
  project,
}: {
  project: Project;
}) {
  const strategies = [
    {
      number: "01",
      icon: Compass,
      title: "Digital Strategy",
      text:
        "Understanding the business, audience and project goals to define a focused digital direction.",
    },
    {
      number: "02",
      icon: Layers3,
      title: "User Experience",
      text:
        "Structuring content and interactions so visitors can explore the experience naturally and clearly.",
    },
    {
      number: "03",
      icon: Workflow,
      title: "Right Technology",
      text:
        "Choosing an appropriate technical approach for performance, responsiveness and long-term maintainability.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-28 text-white md:py-32">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[150px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-rose-500/10 blur-[150px]" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]
            bg-[size:72px_72px]
          "
        />

      </div>


      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

        {/* TOP */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* LEFT */}
          <MotionDiv
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
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
                border-white/10
                bg-white/5
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-orange-400
              "
            >
              <Sparkles size={13} />

              Our Strategy
            </div>


            <h2
              className="
                mt-7
                max-w-3xl
                text-4xl
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                md:text-6xl
              "
            >
              Turning insight
              <br />

              <span className="text-white/30">
                into direction.
              </span>
            </h2>


            <div className="mt-10 flex items-center gap-3">

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                "
              >
                <ArrowDownRight
                  size={17}
                  className="text-orange-400"
                />
              </div>


              <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/30">
                Challenge → Strategy → Experience
              </p>

            </div>

          </MotionDiv>


          {/* RIGHT */}
          <MotionDiv
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.08,
            }}
            className="
              relative
              overflow-hidden
              rounded-[34px]
              border
              border-white/10
              bg-white/[0.05]
              p-8
              backdrop-blur-xl
              md:p-12
            "
          >

            <div className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-orange-500/20 blur-[90px]" />


            <div className="relative">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                Strategic Direction
              </p>


              <p
                className="
                  mt-8
                  text-2xl
                  font-medium
                  leading-[1.5]
                  tracking-[-0.025em]
                  text-white/85
                  md:text-3xl
                "
              >
                {project.solution}
              </p>


              <div className="mt-10 border-t border-white/10 pt-7">

                <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                  Approach
                </p>


                <p className="mt-4 max-w-2xl text-base leading-7 text-white/50">
                  The project direction focused on clarity, visual
                  storytelling and a responsive experience that reflects
                  the character of the business.
                </p>

              </div>

            </div>

          </MotionDiv>

        </div>



        {/* STRATEGY CARDS */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">

          {strategies.map((item, index) => {
            const Icon = item.icon;

            return (

              <MotionDiv
                key={item.number}
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
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-orange-400/30
                  hover:bg-white/[0.07]
                  sm:p-8
                "
              >

                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-orange-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />


                <div className="relative">

                  {/* TOP */}
                  <div className="flex items-center justify-between">

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
                        transition-all
                        duration-300
                        group-hover:bg-orange-500
                      "
                    >
                      <Icon size={20} />
                    </div>


                    <span className="text-xs font-medium text-white/25">
                      {item.number}
                    </span>

                  </div>


                  {/* CONTENT */}
                  <h3 className="mt-9 text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>


                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {item.text}
                  </p>

                </div>

              </MotionDiv>

            );
          })}

        </div>

      </div>

    </section>
  );
}