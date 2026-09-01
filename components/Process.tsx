import Link from "next/link";

import {
  ArrowUpRight,
  Compass,
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  Sparkles,
} from "lucide-react";

import MotionDiv from "@/components/MotionDiv";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discover",
    description:
      "We understand your business, audience, challenges and what success should look like.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description:
      "We shape the product direction, features, structure and technology around your goals.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Design",
    description:
      "We create clear, modern user experiences and interfaces built around real customer journeys.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Build",
    description:
      "Our development process turns the approved experience into a reliable, scalable digital product.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch & Evolve",
    description:
      "We prepare for launch, refine the experience and help your digital product continue to grow.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-white md:py-32">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[150px]" />

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
              How We Work
            </div>

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
              From idea
              <br />

              <span className="text-white/30">
                to digital reality.
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
            <p className="max-w-xl text-lg leading-8 text-white/50">
              A focused process keeps every project clear, collaborative
              and aligned with the business outcome from the beginning.
            </p>
          </MotionDiv>
        </div>

        {/* PROCESS */}
        <div className="relative mt-20">
          {/* DESKTOP CONNECTING LINE */}
          <div
            className="
              absolute
              left-0
              right-0
              top-6
              hidden
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              lg:block
            "
          />

          <div className="grid gap-5 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <MotionDiv
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 25,
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
                  className="relative"
                >
                  {/* NODE */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-black
                      text-xs
                      font-semibold
                      text-orange-400
                      shadow-[0_0_0_8px_rgba(0,0,0,1)]
                    "
                  >
                    {step.number}
                  </div>

                  {/* CARD */}
                  <div
                    className="
                      group
                      mt-8
                      min-h-[300px]
                      rounded-[28px]
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-6
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:border-orange-400/30
                      hover:bg-white/[0.07]
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
                        border-white/10
                        bg-white/5
                        text-white
                        transition-all
                        duration-300
                        group-hover:bg-orange-500
                        group-hover:text-white
                      "
                    >
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/45">
                      {step.description}
                    </p>
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </div>

        {/* BOTTOM */}
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mt-14
            flex
            flex-col
            gap-6
            rounded-[30px]
            border
            border-white/10
            bg-white/[0.04]
            px-8
            py-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
              Built collaboratively
            </p>

            <p className="mt-3 max-w-xl text-lg text-white/65">
              You stay involved throughout the project — from early
              thinking to launch.
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
  );
}