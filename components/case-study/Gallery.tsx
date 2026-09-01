import Image from "next/image";

import MotionDiv from "@/components/MotionDiv";
import type { Project } from "@/data/projects";

import {
  Monitor,
  Smartphone,
  Sparkles,
  Layers3,
} from "lucide-react";

export default function Gallery({
  project,
}: {
  project: Project;
}) {
  if (!project.gallery || project.gallery.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-white py-28 md:py-32">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-orange-100/40 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-rose-100/30 blur-[140px]" />
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
              Digital Experience
            </div>

            <h2
              className="
                mt-7
                max-w-5xl
                text-4xl
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                text-black
                md:text-6xl
              "
            >
              Designed across
              <br />

              <span className="text-black/30">
                every screen.
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
              A closer look at the interface, responsive behaviour and
              visual details created for the {project.title} digital
              experience.
            </p>
          </MotionDiv>
        </div>

        {/* MAIN DESKTOP SHOWCASE */}
        {project.gallery[0] && (
          <MotionDiv
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="mt-16"
          >
            <div
              className="
                overflow-hidden
                rounded-[34px]
                border
                border-black/10
                bg-[#f4f4f4]
                p-3
                shadow-[0_35px_110px_rgba(0,0,0,0.08)]
                sm:p-5
              "
            >
              {/* TOP INFO */}
              <div
                className="
                  flex
                  flex-col
                  gap-5
                  px-2
                  pb-5
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  sm:px-3
                "
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                    01 — Primary Experience
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    {project.gallery[0].title}
                  </h3>
                </div>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-black/10
                    bg-white
                  "
                >
                  <Monitor size={19} />
                </div>
              </div>

              {/* BROWSER */}
              <div
                className="
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-black/10
                  bg-white
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
                    px-5
                    py-4
                  "
                >
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>

                  <div
                    className="
                      mx-auto
                      h-7
                      w-full
                      max-w-[360px]
                      rounded-full
                      border
                      border-black/5
                      bg-white
                    "
                  />

                  <div className="hidden w-[50px] sm:block" />
                </div>

                {/* IMAGE */}
                <div
                  className="
                    relative
                    aspect-[16/10]
                    min-h-[360px]
                    overflow-hidden
                    bg-neutral-100
                    md:min-h-[620px]
                    xl:min-h-[720px]
                  "
                >
                  <Image
                    src={project.gallery[0].image}
                    alt={`${project.title} ${project.gallery[0].title}`}
                    fill
                    className="
                      object-cover
                      object-top
                      transition-transform
                      duration-700
                      hover:scale-[1.01]
                    "
                    sizes="
                      (max-width: 768px) 100vw,
                      (max-width: 1400px) 90vw,
                      1300px
                    "
                  />
                </div>
              </div>
            </div>
          </MotionDiv>
        )}

        {/* SECONDARY GALLERY */}
        {project.gallery.length > 1 && (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {project.gallery.slice(1).map((item, index) => {
              const number = index + 2;
              const Icon = index === 0 ? Smartphone : Layers3;

              return (
                <MotionDiv
                  key={item.title}
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
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-black/10
                    bg-[#f7f7f7]
                    p-3
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_30px_90px_rgba(0,0,0,0.08)]
                    sm:p-4
                  "
                >
                  {/* INFO */}
                  <div className="flex items-center justify-between px-3 py-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                        {String(number).padStart(2, "0")}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                        {item.title}
                      </h3>
                    </div>

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-black/10
                        bg-white
                        transition
                        group-hover:border-orange-200
                        group-hover:bg-orange-50
                        group-hover:text-orange-500
                      "
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      aspect-[4/3]
                      min-h-[340px]
                      overflow-hidden
                      rounded-[24px]
                      border
                      border-black/10
                      bg-neutral-100
                      md:min-h-[460px]
                    "
                  >
                    <Image
                      src={item.image}
                      alt={`${project.title} ${item.title}`}
                      fill
                      className="
                        object-cover
                        object-top
                        transition-transform
                        duration-700
                        group-hover:scale-[1.025]
                      "
                      sizes="
                        (max-width: 1024px) 100vw,
                        50vw
                      "
                    />
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        )}

        {/* BOTTOM STORY STRIP */}
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
            delay: 0.1,
          }}
          className="
            mt-8
            flex
            flex-col
            gap-5
            rounded-[28px]
            border
            border-black/10
            bg-white
            px-7
            py-7
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Responsive By Design
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-black/50">
              The interface is presented across multiple screen sizes to
              show how the experience adapts while maintaining a
              consistent visual direction.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-orange-500" />

            <p className="text-xs font-medium uppercase tracking-[0.15em] text-black/35">
              Desktop • Mobile • UI
            </p>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}