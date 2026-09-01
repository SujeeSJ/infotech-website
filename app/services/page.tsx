import type { Metadata } from "next";
import Link from "next/link";

import MotionDiv from "@/components/MotionDiv";

import {
  ArrowUpRight,
  Bot,
  CloudCog,
  Code2,
  Database,
  Megaphone,
  Palette,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";


/* ----------------------------------
   SERVICES PAGE SEO
----------------------------------- */

const title =
  "Digital Services | Web, Mobile, Software & AI";

const description =
  "Explore Infinotech's digital services including web development, mobile apps, custom software, UI/UX, AI automation, cloud, data, e-commerce, cyber security and digital growth.";


export const metadata: Metadata = {
  title,

  description,

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title:
      "Digital Services | Web, Mobile, Software & AI | Infinotech",

    description,

    url: "/services",

    type: "website",

    siteName: "Infinotech",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Digital Services | Web, Mobile, Software & AI | Infinotech",

    description,
  },
};


/* ----------------------------------
   SERVICES
----------------------------------- */

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web Development",
    text:
      "High-performance websites, corporate platforms and modern web experiences designed for speed, accessibility and growth.",
    tags: ["Websites", "Web Apps", "CMS"],
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile Applications",
    text:
      "Native and cross-platform mobile applications built around real customer and business needs.",
    tags: ["iOS", "Android", "Cross-Platform"],
  },
  {
    number: "03",
    icon: Workflow,
    title: "Custom Software",
    text:
      "Business systems, SaaS products, dashboards and automation tools designed around your unique workflow.",
    tags: ["SaaS", "ERP", "Dashboards"],
  },
  {
    number: "04",
    icon: Palette,
    title: "UI/UX & Product Design",
    text:
      "Research-driven user experiences, interfaces and design systems that make digital products easier to use.",
    tags: ["UX", "UI", "Prototyping"],
  },
  {
    number: "05",
    icon: Bot,
    title: "AI & Automation",
    text:
      "AI assistants, intelligent workflows, business automation and AI integrations built for practical use.",
    tags: ["AI Agents", "Automation", "LLM"],
    featured: true,
  },
  {
    number: "06",
    icon: CloudCog,
    title: "Cloud & DevOps",
    text:
      "Cloud architecture, containerization, deployment pipelines and infrastructure designed for reliability and scale.",
    tags: ["Cloud", "Docker", "CI/CD"],
  },
  {
    number: "07",
    icon: Database,
    title: "Database & Data",
    text:
      "Reliable database architecture, integrations, analytics and data solutions for modern applications.",
    tags: ["SQL", "NoSQL", "Analytics"],
  },
  {
    number: "08",
    icon: ShieldCheck,
    title: "Cyber Security",
    text:
      "Security-focused development practices and protection strategies for digital platforms and applications.",
    tags: ["Security", "Hardening", "Best Practice"],
  },
  {
    number: "09",
    icon: ShoppingCart,
    title: "E-Commerce",
    text:
      "Online stores and commerce platforms designed to make browsing, buying and managing products easier.",
    tags: ["Stores", "Payments", "Commerce"],
  },
  {
    number: "10",
    icon: Megaphone,
    title: "Digital Marketing",
    text:
      "SEO, advertising, analytics and digital growth strategies designed to improve visibility and customer acquisition.",
    tags: ["SEO", "Ads", "Analytics"],
  },
];


/* ----------------------------------
   TECHNOLOGIES
----------------------------------- */

const technologyGroups = [
  {
    title: "Frontend",
    technologies: [
      "Next.js",
      "React",
      "Angular",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "Laravel",
      "PHP",
      "Python",
      "Django",
      "Flask",
      ".NET",
      "Java",
      "Spring Boot",
      "Go",
    ],
  },
  {
    title: "Mobile",
    technologies: [
      "Flutter",
      "React Native",
      "Kotlin",
      "Swift",
      "Android",
      "iOS",
    ],
  },
  {
    title: "Data & Database",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQL Server",
      "Firebase",
      "Redis",
      "SQLite",
    ],
  },
  {
    title: "Cloud & DevOps",
    technologies: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Vercel",
      "Cloudflare",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Linux",
    ],
  },
  {
    title: "AI & Machine Intelligence",
    technologies: [
      "OpenAI",
      "Gemini",
      "Claude",
      "LangChain",
      "AI Agents",
      "Automation",
      "TensorFlow",
      "PyTorch",
      "Hugging Face",
    ],
  },
  {
    title: "CMS & Commerce",
    technologies: [
      "WordPress",
      "WooCommerce",
      "Shopify",
      "Webflow",
      "Strapi",
      "Contentful",
    ],
  },
  {
    title: "Design & Growth",
    technologies: [
      "Figma",
      "UI/UX",
      "Design Systems",
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Google Analytics",
    ],
  },
];


/* ----------------------------------
   PROCESS
----------------------------------- */

const process = [
  {
    number: "01",
    title: "Discover",
    text:
      "Understand your business, users, goals and challenges.",
  },
  {
    number: "02",
    title: "Strategize",
    text:
      "Define the right product direction, features and technology.",
  },
  {
    number: "03",
    title: "Design",
    text:
      "Create clear user journeys and polished digital interfaces.",
  },
  {
    number: "04",
    title: "Build",
    text:
      "Engineer the approved product using suitable modern technologies.",
  },
  {
    number: "05",
    title: "Launch & Evolve",
    text:
      "Launch carefully, optimize and continue improving the product.",
  },
];


/* ----------------------------------
   PAGE
----------------------------------- */

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-black">

      {/* HERO */}

      <section className="relative overflow-hidden pb-28 pt-40">

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[10%] top-24 h-[420px] w-[420px] rounded-full bg-orange-100/70 blur-[130px]" />

          <div className="absolute right-[5%] top-32 h-[450px] w-[450px] rounded-full bg-rose-100/50 blur-[140px]" />

          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)]
              bg-[size:72px_72px]
              [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
            "
          />

        </div>


        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

          <MotionDiv
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
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

              Infinotech Services
            </div>


            <h1
              className="
                mt-8
                max-w-6xl
                text-[clamp(3.7rem,7vw,7.5rem)]
                font-semibold
                leading-[0.91]
                tracking-[-0.06em]
                text-black
              "
            >
              Digital solutions
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
                built for what&apos;s next.
              </span>

            </h1>


            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/55 md:text-xl">
              From websites and mobile applications to AI, custom
              software, cloud systems and digital growth, we bring
              strategy, design and engineering together under one roof.
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
                  bg-black
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:-translate-y-1
                  hover:bg-orange-500
                "
              >
                Discuss Your Project

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
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-black/15
                  bg-white/80
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-black
                  backdrop-blur
                  transition
                  hover:border-black
                "
              >
                Explore Our Work
              </Link>

            </div>

          </MotionDiv>



          {/* FLOATING CAPABILITIES */}

          <div className="mt-20 flex flex-wrap gap-3">

            {[
              "Web Platforms",
              "Mobile Apps",
              "Custom Software",
              "AI",
              "Automation",
              "Cloud",
              "Data",
              "E-Commerce",
              "Digital Growth",
            ].map((item, index) => (

              <MotionDiv
                key={item}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: [0, -5, 0],
                }}
                transition={{
                  opacity: {
                    duration: 0.4,
                    delay: index * 0.05,
                  },

                  y: {
                    duration:
                      4 +
                      index * 0.15,

                    repeat:
                      Infinity,
                  },
                }}
                className="
                  rounded-full
                  border
                  border-black/10
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-black/60
                  shadow-sm
                "
              >
                {item}
              </MotionDiv>

            ))}

          </div>

        </div>

      </section>



      {/* SERVICES */}

      <section className="relative bg-[#fafafa] py-28 md:py-32">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

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
              viewport={{
                once: true,
              }}
            >

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-500">
                What We Build
              </p>


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
                Complete digital

                <span className="text-black/30">
                  {" "}
                  capabilities.
                </span>

              </h2>

            </MotionDiv>


            <p className="max-w-xl text-lg leading-8 text-black/50">
              Every project is different. We combine the capabilities
              that make sense for your business instead of forcing
              every project into the same technology stack.
            </p>

          </div>



          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {services.map(
              (service, index) => {

                const Icon =
                  service.icon;


                return (

                  <MotionDiv
                    key={service.title}
                    initial={{
                      opacity: 0,
                      y: 28,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration:
                        0.5,

                      delay:
                        index *
                        0.05,
                    }}
                    className="h-full"
                  >

                    <div
                      className={`
                        group
                        relative
                        flex
                        h-full
                        min-h-[390px]
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

                            ? `
                              border-black
                              bg-black
                              text-white
                            `

                            : `
                              border-black/10
                              bg-white
                              text-black
                              hover:-translate-y-2
                              hover:shadow-[0_30px_90px_rgba(0,0,0,0.08)]
                            `
                        }
                      `}
                    >

                      {service.featured && (

                        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-orange-500/30 blur-[70px]" />

                      )}


                      {!service.featured && (

                        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                      )}


                      <div className="relative flex h-full flex-col">

                        <div className="flex items-start justify-between">

                          <div
                            className={`
                              flex
                              h-12
                              w-12
                              items-center
                              justify-center
                              rounded-2xl
                              border

                              ${
                                service.featured

                                  ? `
                                    border-white/10
                                    bg-white/10
                                    text-orange-400
                                  `

                                  : `
                                    border-black/10
                                    bg-[#fafafa]
                                    text-black
                                    group-hover:border-orange-200
                                    group-hover:bg-orange-50
                                    group-hover:text-orange-500
                                  `
                              }
                            `}
                          >
                            <Icon size={20} />
                          </div>


                          <span
                            className={
                              service.featured

                                ? "text-xs text-white/25"

                                : "text-xs text-black/25"
                            }
                          >
                            {service.number}
                          </span>

                        </div>


                        <h3 className="mt-8 text-2xl font-semibold tracking-[-0.025em]">
                          {service.title}
                        </h3>


                        <p
                          className={`
                            mt-4
                            text-sm
                            leading-7

                            ${
                              service.featured

                                ? "text-white/50"

                                : "text-black/50"
                            }
                          `}
                        >
                          {service.text}
                        </p>


                        <div className="mt-auto flex flex-wrap gap-2 pt-8">

                          {service.tags.map(
                            (tag) => (

                              <span
                                key={tag}
                                className={`
                                  rounded-full
                                  border
                                  px-3
                                  py-1.5
                                  text-[11px]

                                  ${
                                    service.featured

                                      ? `
                                        border-white/10
                                        bg-white/5
                                        text-white/45
                                      `

                                      : `
                                        border-black/10
                                        bg-[#fafafa]
                                        text-black/45
                                      `
                                  }
                                `}
                              >
                                {tag}
                              </span>

                            )
                          )}

                        </div>

                      </div>

                    </div>

                  </MotionDiv>

                );
              }
            )}

          </div>

        </div>

      </section>



      {/* TECHNOLOGY */}

      <section className="relative overflow-hidden bg-white py-28 md:py-32">

        <div className="pointer-events-none absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-[150px]" />


        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

          <MotionDiv
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-500">
              Technology Ecosystem
            </p>


            <h2
              className="
                mt-6
                max-w-5xl
                text-4xl
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                md:text-6xl
              "
            >
              The right technology
              <br />

              <span className="text-black/30">
                for the right problem.
              </span>

            </h2>


            <p className="mt-7 max-w-3xl text-lg leading-8 text-black/50">
              We work across modern web, software, mobile, cloud, data,
              AI and growth technologies. The stack is chosen according
              to the needs of the product.
            </p>

          </MotionDiv>



          <div className="mt-16 grid gap-5 md:grid-cols-2">

            {technologyGroups.map(
              (group, index) => (

                <MotionDiv
                  key={group.title}
                  initial={{
                    opacity: 0,
                    y: 22,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay:
                      index *
                      0.05,
                  }}
                  className="
                    rounded-[28px]
                    border
                    border-black/10
                    bg-[#fafafa]
                    p-7
                    transition
                    hover:bg-white
                    hover:shadow-xl
                    sm:p-8
                  "
                >

                  <div className="flex items-center gap-3">

                    <div className="h-2 w-2 rounded-full bg-orange-500" />

                    <h3 className="text-lg font-semibold">
                      {group.title}
                    </h3>

                  </div>


                  <div className="mt-6 flex flex-wrap gap-2">

                    {group.technologies.map(
                      (technology) => (

                        <span
                          key={technology}
                          className="
                            rounded-full
                            border
                            border-black/10
                            bg-white
                            px-3.5
                            py-2
                            text-xs
                            font-medium
                            text-black/55
                          "
                        >
                          {technology}
                        </span>

                      )
                    )}

                  </div>

                </MotionDiv>

              )
            )}

          </div>

        </div>

      </section>



      {/* PROCESS */}

      <section className="relative overflow-hidden bg-black py-28 text-white md:py-32">

        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/15 blur-[140px]" />


        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
            From Idea To Launch
          </p>


          <h2
            className="
              mt-6
              max-w-5xl
              text-4xl
              font-semibold
              leading-[1]
              tracking-[-0.045em]
              md:text-6xl
            "
          >
            A clear process.
            <br />

            <span className="text-white/30">
              Built around collaboration.
            </span>

          </h2>



          <div className="mt-16 grid gap-4 lg:grid-cols-5">

            {process.map(
              (step, index) => (

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
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay:
                      index *
                      0.07,
                  }}
                  className="
                    rounded-[26px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-6
                    transition
                    hover:-translate-y-2
                    hover:border-orange-400/30
                    hover:bg-white/[0.07]
                  "
                >

                  <p className="text-sm font-semibold text-orange-400">
                    {step.number}
                  </p>


                  <h3 className="mt-8 text-xl font-semibold">
                    {step.title}
                  </h3>


                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {step.text}
                  </p>

                </MotionDiv>

              )
            )}

          </div>

        </div>

      </section>



      {/* FINAL CTA */}

      <section className="bg-white py-24 md:py-32">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

          <MotionDiv
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              overflow-hidden
              rounded-[36px]
              bg-[#f5f5f5]
              px-7
              py-16
              md:px-12
              md:py-20
              lg:px-16
            "
          >

            <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full bg-orange-200/60 blur-[100px]" />


            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-500">
                  Your Next Digital Product
                </p>


                <h2
                  className="
                    mt-6
                    max-w-5xl
                    text-4xl
                    font-semibold
                    leading-[1]
                    tracking-[-0.045em]
                    md:text-6xl
                  "
                >
                  Have a challenge?
                  <br />

                  <span className="text-black/30">
                    Let&apos;s find the right solution.
                  </span>

                </h2>


                <p className="mt-7 max-w-2xl text-lg leading-8 text-black/50">
                  Tell us what you&apos;re trying to build, improve or
                  automate. We&apos;ll help shape the right digital
                  approach.
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
                  bg-black
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:-translate-y-1
                  hover:bg-orange-500
                "
              >
                Start A Project

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

      </section>

    </main>
  );
}