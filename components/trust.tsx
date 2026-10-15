import {
  ArrowUpRight,
  Globe2,
  Layers3,
  Sparkles,
} from "lucide-react";

import Link from "next/link";
import MotionDiv from "@/components/MotionDiv";

export default function Trust() {
  const cards = [
    {
      icon: Sparkles,
      eyebrow: "Since 2020",
      title: "Built with experience.",
      description:
        "Infinotech has been building digital experiences and technology solutions since 2020.",
    },
    {
      icon: Layers3,
      eyebrow: "End-to-End",
      title: "One partner. More possibilities.",
      description:
        "From strategy and design to development, AI, cloud and digital growth.",
    },
    {
      icon: Globe2,
      eyebrow: "Global Mindset",
      title: "Designed beyond borders.",
      description:
        "We create modern digital products for businesses looking to compete in a global market.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-black/10 bg-white py-28">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-orange-100/40 blur-[130px]" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(0,0,0,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.018)_1px,transparent_1px)]
            bg-[size:72px_72px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">
        {/* TOP */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
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
              Why Infinotech
            </div>

            <h2
              className="
                mt-6
                max-w-xl
                text-4xl
                font-semibold
                leading-[1.02]
                tracking-[-0.04em]
                text-black
                md:text-6xl
              "
            >
              Technology built around
              <span className="text-black/30"> real business goals.</span>
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
              We combine product thinking, design and engineering to turn
              ambitious ideas into digital products that are useful,
              scalable and ready for the future.
            </p>

            <Link
              href="/about"
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
              Discover Infinotech

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

        {/* CARDS */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <MotionDiv
                key={card.title}
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
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-black/10
                  bg-white
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]
                  sm:p-8
                "
              >
                <div
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-orange-100
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative">
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
                      transition-all
                      duration-300
                      group-hover:border-orange-200
                      group-hover:bg-orange-50
                    "
                  >
                    <Icon
                      size={20}
                      className="
                        text-black
                        transition-colors
                        group-hover:text-orange-500
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-8
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-orange-500
                    "
                  >
                    {card.eyebrow}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-black">
                    {card.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-black/50">
                    {card.description}
                  </p>
                </div>
              </MotionDiv>
            );
          })}
        </div>

        {/* BOTTOM STRIP */}
        <MotionDiv
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mt-8
            flex
            flex-col
            gap-6
            rounded-[28px]
            bg-black
            px-7
            py-7
            text-white
            md:flex-row
            md:items-center
            md:justify-between
            lg:px-9
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-white/10
              "
            >
              <Globe2
                size={20}
                className="text-orange-400"
              />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Global Digital Partner
              </p>

              <p className="mt-1 text-sm font-medium text-white/85">
                Strategy • Design • Engineering • AI • Growth
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.15em] text-white/40">
            <span>Web</span>
            <span>Mobile</span>
            <span>Software</span>
            <span>AI</span>
            <span>Cloud</span>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}