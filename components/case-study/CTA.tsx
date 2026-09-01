import Link from "next/link";

import MotionDiv from "@/components/MotionDiv";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-white md:py-36">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[150px]" />

        <div className="absolute -bottom-40 -right-20 h-[420px] w-[420px] rounded-full bg-rose-500/10 blur-[140px]" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]
            bg-[size:72px_72px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">
        <MotionDiv
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
            Start A Project
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            {/* LEFT */}
            <div>
              <h2
                className="
                  max-w-5xl
                  text-4xl
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.05em]
                  md:text-6xl
                  lg:text-7xl
                "
              >
                Ready to build
                <br />

                <span className="text-white/30">
                  something remarkable?
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
                Tell us about your idea, challenge or next digital
                product. Infinotech can help shape the right approach
                from strategy and design through development and launch.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
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
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-orange-500
                    hover:text-white
                  "
                >
                  Start Your Project

                  <ArrowUpRight
                    size={17}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </Link>

                <Link
                  href="/work"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/15
                    bg-white/5
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white/30
                    hover:bg-white/10
                  "
                >
                  <BriefcaseBusiness size={17} />
                  Explore More Work
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <MotionDiv
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.12,
              }}
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.05]
                p-7
                backdrop-blur-xl
                md:p-8
              "
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange-500/20 blur-3xl" />

              <div className="relative">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-orange-500
                    text-white
                  "
                >
                  <MessageCircle size={20} />
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                  Let&apos;s Talk
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Your idea could be our next case study.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  Share what you want to build, improve or automate and
                  let&apos;s explore what the right digital solution
                  could look like.
                </p>

                <Link
                  href="/contact"
                  className="
                    group
                    mt-8
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-white
                    hover:text-black
                  "
                >
                  Discuss your project

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
        </MotionDiv>
      </div>
    </section>
  );
}