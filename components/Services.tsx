import Link from "next/link";

import {
  ArrowUpRight,
  Bot,
  CloudCog,
  Code2,
  Megaphone,
  PanelsTopLeft,
  Smartphone,
  Sparkles,
} from "lucide-react";

import MotionDiv from "@/components/MotionDiv";

const services = [
  {
    number: "01",
    icon: PanelsTopLeft,
    title: "Web & Digital Experiences",
    description:
      "Modern websites, web platforms and digital experiences designed around your business and customers.",
    tags: ["Websites", "Web Apps", "E-Commerce"],
  },
  {
    number: "02",
    icon: Code2,
    title: "Custom Software",
    description:
      "Scalable business applications, dashboards and custom systems built around the way your business works.",
    tags: ["SaaS", "Dashboards", "Automation"],
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Thoughtful mobile products for iOS and Android, from customer-facing apps to internal business tools.",
    tags: ["iOS", "Android", "Cross-Platform"],
  },
  {
    number: "04",
    icon: Bot,
    title: "AI & Automation",
    description:
      "AI assistants, intelligent workflows and automation systems that help teams work smarter and faster.",
    tags: ["AI Agents", "Assistants", "Automation"],
    featured: true,
  },
  {
    number: "05",
    icon: CloudCog,
    title: "Cloud, Data & DevOps",
    description:
      "Reliable cloud infrastructure, databases and deployment systems engineered for security and scale.",
    tags: ["Cloud", "Databases", "DevOps"],
  },
  {
    number: "06",
    icon: Megaphone,
    title: "Digital Growth",
    description:
      "Digital marketing, SEO and performance strategies designed to strengthen your online presence.",
    tags: ["SEO", "Marketing", "Analytics"],
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Laravel",
  "Python",
  "Flutter",
  "Node.js",
  "AWS",
  "Azure",
  "Docker",
  "AI",
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-28 md:py-32">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-orange-100/50 blur-[140px]" />

        <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-rose-100/40 blur-[130px]" />
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
              What We Do
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
              Technology solutions built
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-orange-500
                  via-rose-500
                  to-orange-400
                  bg-clip-text
                  text-transparent
                "
              >
                around your business.
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
              From the first idea to launch and growth, Infinotech brings
              strategy, design, engineering and intelligent technology
              together in one place.
            </p>

            <Link
              href="/services"
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
              Explore all services

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

        {/* SERVICE GRID */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <MotionDiv
                key={service.number}
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
                  delay: index * 0.06,
                }}
              >
                <Link
                  href="/services"
                  className={`
                    group
                    relative
                    flex
                    min-h-[390px]
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-[30px]
                    border
                    p-7
                    transition-all
                    duration-500
                    sm:p-8
                    ${
                      service.featured
                        ? "border-black bg-black text-white"
                        : "border-black/10 bg-white text-black hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(0,0,0,0.08)]"
                    }
                  `}
                >
                  {/* HOVER GLOW */}
                  {!service.featured && (
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
                  )}

                  {service.featured && (
                    <>
                      <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-orange-500/30 blur-3xl" />

                      <div className="pointer-events-none absolute bottom-0 left-0 h-44 w-44 rounded-full bg-rose-500/10 blur-3xl" />
                    </>
                  )}

                  <div className="relative flex h-full flex-col">
                    {/* TOP */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`
                          flex
                          h-13
                          w-13
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          ${
                            service.featured
                              ? "border-white/10 bg-white/10 text-orange-400"
                              : "border-black/10 bg-[#fafafa] text-black transition-colors group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-orange-500"
                          }
                        `}
                      >
                        <Icon size={21} />
                      </div>

                      <span
                        className={
                          service.featured
                            ? "text-xs font-medium text-white/30"
                            : "text-xs font-medium text-black/25"
                        }
                      >
                        {service.number}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <h3
                      className={`
                        mt-9
                        text-2xl
                        font-semibold
                        tracking-[-0.025em]
                        ${
                          service.featured
                            ? "text-white"
                            : "text-black"
                        }
                      `}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`
                        mt-4
                        max-w-sm
                        text-sm
                        leading-7
                        ${
                          service.featured
                            ? "text-white/50"
                            : "text-black/50"
                        }
                      `}
                    >
                      {service.description}
                    </p>

                    {/* TAGS */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`
                            rounded-full
                            border
                            px-3
                            py-1.5
                            text-[11px]
                            font-medium
                            ${
                              service.featured
                                ? "border-white/10 bg-white/5 text-white/50"
                                : "border-black/10 bg-[#fafafa] text-black/45"
                            }
                          `}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* BOTTOM */}
                    <div className="mt-auto flex items-center justify-between pt-9">
                      <span
                        className={`
                          text-sm
                          font-semibold
                          ${
                            service.featured
                              ? "text-white"
                              : "text-black"
                          }
                        `}
                      >
                        Explore service
                      </span>

                      <div
                        className={`
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          ${
                            service.featured
                              ? "bg-white text-black"
                              : "border border-black/10 bg-white text-black group-hover:bg-black group-hover:text-white"
                          }
                        `}
                      >
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </MotionDiv>
            );
          })}
        </div>

        {/* TECHNOLOGY STRIP */}
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
            overflow-hidden
            rounded-[28px]
            border
            border-black/10
            bg-white
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6
              px-7
              py-7
              md:flex-row
              md:items-center
              md:justify-between
              lg:px-9
            "
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                Technology Ecosystem
              </p>

              <p className="mt-2 text-sm text-black/50">
                Modern tools selected for each project.
              </p>
            </div>

            <div className="flex max-w-4xl flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-black/10
                    bg-[#fafafa]
                    px-3.5
                    py-2
                    text-xs
                    font-medium
                    text-black/55
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}