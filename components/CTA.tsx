import Link from "next/link";

import {
  ArrowUpRight,
  Bot,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import MotionDiv from "@/components/MotionDiv";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            bg-black
            px-7
            py-16
            text-white
            md:px-12
            md:py-20
            lg:px-16
            lg:py-24
          "
        >
          {/* BACKGROUND EFFECTS */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-[350px] w-[350px] rounded-full bg-orange-500/25 blur-[100px]" />

            <div className="absolute -bottom-32 left-[25%] h-[350px] w-[350px] rounded-full bg-rose-500/15 blur-[120px]" />

            <div
              className="
                absolute inset-0
                bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
                bg-[size:70px_70px]
              "
            />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            {/* LEFT */}
            <div>
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
                Start Something Great
              </div>

              <h2
                className="
                  mt-7
                  max-w-4xl
                  text-4xl
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.045em]
                  md:text-6xl
                  lg:text-7xl
                "
              >
                Have an idea?
                <br />

                <span className="text-white/30">
                  Let&apos;s engineer it
                  <br className="hidden md:block" /> into reality.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/50 md:text-lg">
                Whether you&apos;re starting something new, improving an
                existing product or exploring AI, Infinotech can help turn
                your next idea into a focused digital solution.
              </p>

              {/* BUTTONS */}
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
                  href="/ai-lab"
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
                    backdrop-blur
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white/30
                    hover:bg-white/10
                  "
                >
                  <Bot size={17} />

                  Explore AI Lab
                </Link>
              </div>
            </div>

            {/* RIGHT CARD */}
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.06]
                p-7
                backdrop-blur-xl
                md:p-8
              "
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />

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

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                  Your next project
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  Tell us what you&apos;re thinking.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  Share your idea, goals or current challenge. We&apos;ll
                  help identify the right digital approach for your
                  business.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-orange-400" />

                    <p className="text-sm text-white/65">
                      Website or web platform
                    </p>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-orange-400" />

                    <p className="text-sm text-white/65">
                      Mobile or custom software
                    </p>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-orange-400" />

                    <p className="text-sm text-white/65">
                      AI, automation or digital growth
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="
                    group
                    mt-8
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    bg-white
                    px-5
                    py-4
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