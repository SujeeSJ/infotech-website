import MotionDiv from "@/components/MotionDiv";
import type { Project } from "@/data/projects";

import {
  BriefcaseBusiness,
  CalendarDays,
  Layers3,
  Building2,
} from "lucide-react";

export default function Snapshot({
  project,
}: {
  project: Project;
}) {
  const details = [
    {
      number: "01",
      label: "Client",
      value: project.client,
      icon: Building2,
    },
    {
      number: "02",
      label: "Industry",
      value: project.industry,
      icon: BriefcaseBusiness,
    },
    {
      number: "03",
      label: "Year",
      value: project.year,
      icon: CalendarDays,
    },
    {
      number: "04",
      label: "Services",
      value: project.services.join(" • "),
      icon: Layers3,
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-black/10 bg-[#fafafa] py-24 md:py-28">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-orange-100/50 blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-rose-100/30 blur-[130px]" />
      </div>


      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-500">
              Project Snapshot
            </p>

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
              The project
              <br />

              <span className="text-black/30">
                at a glance.
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
          >
            <p className="max-w-xl text-lg leading-8 text-black/50">
              A quick overview of the client, industry, project timeline
              and key services involved in shaping the digital experience.
            </p>
          </MotionDiv>

        </div>



        {/* DETAILS */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {details.map((item, index) => {
            const Icon = item.icon;

            return (
              <MotionDiv
                key={item.label}
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
                    h-full
                    min-h-[290px]
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
                    hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]
                    sm:p-8
                  "
                >

                  {/* HOVER GLOW */}
                  <div
                    className="
                      pointer-events-none
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


                  <div className="relative flex h-full flex-col">

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


                      <span className="text-xs font-medium text-black/25">
                        {item.number}
                      </span>

                    </div>


                    {/* CONTENT */}
                    <div className="mt-auto pt-10">

                      <p
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-black/35
                        "
                      >
                        {item.label}
                      </p>


                      <h3
                        className="
                          mt-4
                          text-lg
                          font-semibold
                          leading-7
                          tracking-[-0.015em]
                          text-black
                        "
                      >
                        {item.value}
                      </h3>

                    </div>

                  </div>

                </div>

              </MotionDiv>
            );
          })}

        </div>



        {/* SMALL PROJECT BAR */}
        <MotionDiv
          initial={{ opacity: 0, y: 16 }}
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
            gap-4
            rounded-[26px]
            border
            border-black/10
            bg-white
            px-7
            py-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p className="text-sm text-black/45">
            Project focus
          </p>


          <div className="flex flex-wrap gap-2">

            {project.services.slice(0, 4).map((service) => (
              <span
                key={service}
                className="
                  rounded-full
                  bg-[#fafafa]
                  px-3.5
                  py-2
                  text-xs
                  font-medium
                  text-black/55
                "
              >
                {service}
              </span>
            ))}

          </div>

        </MotionDiv>

      </div>

    </section>
  );
}