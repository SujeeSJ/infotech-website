import type { Metadata } from "next";
import Link from "next/link";

import MotionDiv from "@/components/MotionDiv";

import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Database,
  GitBranch,
  MessageCircle,
  MessageSquareText,
  Network,
  Phone,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";


/* ----------------------------------
   CONFIG
----------------------------------- */

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=94754546492&text&type=phone_number&app_absent=0";


/* ----------------------------------
   AI LAB SEO
----------------------------------- */

const title =
  "AI Lab | AI Automation & Intelligent Digital Solutions";

const description =
  "Explore Infinotech AI Lab and our approach to AI assistants, automation, AI integration, intelligent data, AI agents and practical AI-powered digital solutions.";


export const metadata: Metadata = {
  title,

  description,

  alternates: {
    canonical: "/ai-lab",
  },

  openGraph: {
    title:
      "Infinotech AI Lab | AI Automation & Intelligent Digital Solutions",

    description,

    url: "/ai-lab",

    type: "website",

    siteName: "Infinotech",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Infinotech AI Lab | AI Automation & Intelligent Digital Solutions",

    description,
  },
};


/* ----------------------------------
   AI CAPABILITIES
----------------------------------- */

const aiSolutions = [
  {
    number: "01",

    icon: Bot,

    title: "AI Assistants",

    text:
      "Business-focused AI assistants for websites, internal tools, customer support and digital experiences.",

    tags: [
      "Chat",
      "Support",
      "Knowledge",
    ],
  },

  {
    number: "02",

    icon: Workflow,

    title: "AI Automation",

    text:
      "Connect AI with repetitive business processes to reduce manual work and create smarter workflows.",

    tags: [
      "Workflow",
      "Automation",
      "Operations",
    ],
  },

  {
    number: "03",

    icon: Network,

    title: "AI Integration",

    text:
      "Integrate AI capabilities into websites, software platforms, mobile applications and existing business systems.",

    tags: [
      "API",
      "Apps",
      "Platforms",
    ],
  },

  {
    number: "04",

    icon: Database,

    title: "Intelligent Data",

    text:
      "Use AI to organize, summarize and interpret business information in more useful ways.",

    tags: [
      "Data",
      "Insights",
      "Search",
    ],
  },

  {
    number: "05",

    icon: GitBranch,

    title: "AI Agents",

    text:
      "Explore task-oriented AI systems that can reason through workflows and coordinate actions using approved tools.",

    tags: [
      "Agents",
      "Tools",
      "Tasks",
    ],
  },

  {
    number: "06",

    icon: MessageSquareText,

    title: "Conversational Experiences",

    text:
      "Create natural-language interfaces that allow customers and teams to interact with digital systems more easily.",

    tags: [
      "Conversation",
      "UX",
      "AI",
    ],
  },
];


/* ----------------------------------
   TECHNOLOGIES
----------------------------------- */

const technologies = [
  "OpenAI",
  "Gemini",
  "Claude",
  "Python",
  "LangChain",
  "AI Agents",
  "Machine Learning",
  "TensorFlow",
  "PyTorch",
  "Hugging Face",
  "Vector Search",
  "Automation APIs",
];


/* ----------------------------------
   PROCESS
----------------------------------- */

const process = [
  {
    number: "01",

    title: "Discover",

    text:
      "Understand the business problem and identify where AI could create practical value.",
  },

  {
    number: "02",

    title: "Design",

    text:
      "Plan the user experience, workflow, data requirements and appropriate AI approach.",
  },

  {
    number: "03",

    title: "Integrate",

    text:
      "Connect the AI capability with the website, application or business system.",
  },

  {
    number: "04",

    title: "Test & Refine",

    text:
      "Evaluate behaviour, reliability and user experience before wider deployment.",
  },
];


/* ----------------------------------
   PAGE
----------------------------------- */

export default function AILabPage() {
  return (
    <main className="overflow-hidden bg-white text-black">

      {/* ==================================
          HERO
      =================================== */}

      <section className="relative overflow-hidden pb-28 pt-40">

        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[7%] top-20 h-[480px] w-[480px] rounded-full bg-orange-100/70 blur-[140px]" />


          <div className="absolute right-[5%] top-16 h-[520px] w-[520px] rounded-full bg-violet-100/55 blur-[150px]" />


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

          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

            {/* LEFT */}

            <MotionDiv
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
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

                Infinotech AI Lab
              </div>



              <h1
                className="
                  mt-8
                  max-w-6xl
                  text-[clamp(3.8rem,7vw,7.3rem)]
                  font-semibold
                  leading-[0.91]
                  tracking-[-0.06em]
                "
              >
                Building smarter
                <br />


                <span
                  className="
                    bg-gradient-to-r
                    from-orange-500
                    via-rose-500
                    to-violet-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  digital experiences.
                </span>

              </h1>



              <p className="mt-8 max-w-3xl text-lg leading-8 text-black/55 md:text-xl">
                We explore how artificial intelligence, automation and
                software engineering can be combined to solve practical
                business problems and improve digital experiences.
              </p>



              {/* DEVELOPMENT STATUS */}

              <div
                className="
                  mt-8
                  flex
                  max-w-2xl
                  items-start
                  gap-3
                  rounded-2xl
                  border
                  border-orange-200
                  bg-orange-50
                  px-5
                  py-4
                "
              >

                <div
                  className="
                    mt-0.5
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-black
                    text-white
                  "
                >
                  <Bot size={14} />
                </div>


                <div>

                  <p className="text-xs font-semibold text-black">
                    Infinotech AI is currently in development.
                  </p>


                  <p className="mt-1 text-xs leading-5 text-black/50">
                    Our website AI assistant is still being improved.
                    For an important enquiry or a quick response,
                    contact our team directly on WhatsApp.
                  </p>

                </div>

              </div>



              {/* HERO BUTTONS */}

              <div className="mt-8 flex flex-wrap gap-3">

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
                  Talk With Us

                  <ArrowUpRight
                    size={17}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </Link>



                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-black/15
                    bg-white
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-black
                    transition
                    hover:-translate-y-1
                    hover:border-orange-300
                    hover:bg-orange-50
                    hover:text-orange-600
                  "
                >
                  <MessageCircle size={16} />

                  WhatsApp Us
                </a>



                <Link
                  href="/services"
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-black/15
                    bg-white/70
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
                  Explore Services
                </Link>

              </div>

            </MotionDiv>



            {/* RIGHT AI VISUAL */}

            <MotionDiv
              initial={{
                opacity: 0,
                x: 35,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.12,
              }}
              className="relative"
            >

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/50 blur-[120px]" />



              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-black/10
                  bg-black
                  p-4
                  shadow-[0_40px_130px_rgba(0,0,0,0.20)]
                "
              >

                {/* AI WINDOW */}

                <div
                  className="
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-white/10
                    bg-[#101010]
                    text-white
                  "
                >

                  {/* HEADER */}

                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                    <div className="flex items-center gap-3">

                      <div
                        className="
                          relative
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-2xl
                          bg-white
                          text-black
                        "
                      >
                        <Bot size={18} />


                        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-orange-500 ring-2 ring-black" />

                      </div>



                      <div>

                        <p className="text-sm font-semibold">
                          Infinotech AI
                        </p>


                        <p className="mt-0.5 text-[10px] text-white/35">
                          AI Project Assistant
                        </p>

                      </div>

                    </div>



                    <div
                      className="
                        rounded-full
                        border
                        border-orange-400/20
                        bg-orange-400/10
                        px-3
                        py-1.5
                        text-[10px]
                        font-medium
                        text-orange-300
                      "
                    >
                      In Development
                    </div>

                  </div>



                  {/* CHAT DEMO */}

                  <div className="space-y-4 p-5 md:p-7">

                    <MotionDiv
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                      className="
                        ml-auto
                        max-w-[82%]
                        rounded-[20px]
                        rounded-br-md
                        bg-white
                        px-4
                        py-3
                        text-sm
                        leading-6
                        text-black
                      "
                    >
                      I run a restaurant and want to improve online
                      ordering. What could I build?
                    </MotionDiv>



                    <MotionDiv
                      animate={{
                        y: [0, 3, 0],
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                      }}
                      className="
                        max-w-[90%]
                        rounded-[22px]
                        rounded-bl-md
                        border
                        border-white/10
                        bg-white/[0.06]
                        p-5
                      "
                    >

                      <div className="flex items-center gap-2">

                        <Sparkles
                          size={14}
                          className="text-orange-400"
                        />


                        <p className="text-xs font-semibold text-orange-400">
                          Possible Direction
                        </p>

                      </div>



                      <p className="mt-4 text-sm leading-7 text-white/70">
                        A digital ordering platform could combine an
                        online menu, customer ordering, an admin
                        dashboard and automated communication.
                      </p>



                      <div className="mt-5 grid grid-cols-2 gap-2">

                        {[
                          "Ordering",
                          "Dashboard",
                          "Automation",
                          "AI Assistance",
                        ].map((item) => (

                          <div
                            key={item}
                            className="
                              rounded-xl
                              border
                              border-white/10
                              bg-white/[0.04]
                              px-3
                              py-2.5
                              text-xs
                              text-white/50
                            "
                          >
                            {item}
                          </div>

                        ))}

                      </div>

                    </MotionDiv>



                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        px-4
                        py-3
                      "
                    >

                      <p className="text-xs text-white/25">
                        Tell me about your project...
                      </p>


                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-xl
                          bg-orange-500
                        "
                      >
                        <ArrowUpRight size={15} />
                      </div>

                    </div>

                  </div>

                </div>

              </div>



              {/* FLOATING LABEL */}

              <MotionDiv
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  -bottom-5
                  -left-5
                  hidden
                  rounded-2xl
                  border
                  border-black/10
                  bg-white
                  px-5
                  py-4
                  shadow-xl
                  lg:block
                "
              >

                <p className="text-[10px] uppercase tracking-[0.18em] text-black/30">
                  AI + Software
                </p>


                <p className="mt-1 text-sm font-semibold">
                  Built around business needs
                </p>

              </MotionDiv>

            </MotionDiv>

          </div>

        </div>

      </section>



      {/* ==================================
          AI CAPABILITIES
      =================================== */}

      <section className="relative bg-[#f7f7f7] py-28 md:py-32">

        <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-violet-100/50 blur-[140px]" />



        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">

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
                AI Capabilities
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
                Intelligence built

                <span className="text-black/30">
                  {" "}
                  into products.
                </span>

              </h2>

            </MotionDiv>



            <p className="max-w-xl text-lg leading-8 text-black/50">
              AI becomes valuable when it is connected to a clear
              business problem, useful data and a thoughtfully designed
              digital experience.
            </p>

          </div>



          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {aiSolutions.map(
              (solution, index) => {

                const Icon =
                  solution.icon;


                return (

                  <MotionDiv
                    key={solution.number}
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
                        0.06,
                    }}
                    className="
                      group
                      relative
                      min-h-[350px]
                      overflow-hidden
                      rounded-[30px]
                      border
                      border-black/10
                      bg-white
                      p-7
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:shadow-[0_30px_90px_rgba(0,0,0,0.08)]
                    "
                  >

                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />



                    <div className="relative flex h-full flex-col">

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
                            transition
                            group-hover:border-orange-200
                            group-hover:bg-orange-50
                            group-hover:text-orange-500
                          "
                        >
                          <Icon size={20} />
                        </div>


                        <span className="text-xs text-black/25">
                          {solution.number}
                        </span>

                      </div>



                      <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                        {solution.title}
                      </h3>


                      <p className="mt-4 text-sm leading-7 text-black/50">
                        {solution.text}
                      </p>



                      <div className="mt-auto flex flex-wrap gap-2 pt-8">

                        {solution.tags.map(
                          (tag) => (

                            <span
                              key={tag}
                              className="
                                rounded-full
                                border
                                border-black/10
                                bg-[#fafafa]
                                px-3
                                py-1.5
                                text-[11px]
                                text-black/45
                              "
                            >
                              {tag}
                            </span>

                          )
                        )}

                      </div>

                    </div>

                  </MotionDiv>

                );
              }
            )}

          </div>

        </div>

      </section>



      {/* ==================================
          INFINOTECH AI STATUS
      =================================== */}

      <section className="relative overflow-hidden bg-white py-28 md:py-32">

        <div className="pointer-events-none absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-orange-100/45 blur-[140px]" />



        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* LEFT */}

            <MotionDiv
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
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
                <Zap size={13} />

                AI In Development
              </div>



              <h2
                className="
                  mt-7
                  max-w-4xl
                  text-4xl
                  font-semibold
                  leading-[1]
                  tracking-[-0.045em]
                  md:text-6xl
                "
              >
                Meet
                <br />

                <span className="text-black/30">
                  Infinotech AI.
                </span>

              </h2>



              <p className="mt-7 max-w-xl text-lg leading-8 text-black/50">
                We&apos;re developing Infinotech AI as a digital project
                assistant that can help visitors explore services,
                understand possible solutions and prepare their project
                ideas.
              </p>



              {/* STATUS CARD */}

              <div
                className="
                  mt-8
                  rounded-[26px]
                  border
                  border-orange-200
                  bg-orange-50
                  p-6
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-2xl
                      bg-black
                      text-white
                    "
                  >
                    <Bot size={17} />
                  </div>


                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
                      Current Status
                    </p>


                    <p className="mt-1 text-sm font-semibold text-black">
                      Still being improved
                    </p>

                  </div>

                </div>



                <p className="mt-5 text-sm leading-7 text-black/55">
                  Infinotech AI is still being improved. If the AI
                  assistant is unavailable or cannot answer your question,
                  our team is ready to help you directly.
                </p>

              </div>



              {/* CONTACT OPTIONS */}

              <div className="mt-6 flex flex-wrap gap-3">

                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-black
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-orange-500
                  "
                >
                  Talk With Us

                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </Link>



                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-black/10
                    bg-white
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-black
                    transition
                    hover:border-orange-300
                    hover:bg-orange-50
                    hover:text-orange-600
                  "
                >
                  <MessageCircle size={15} />

                  WhatsApp
                </a>



                <a
                  href="tel:+94754546492"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-black/10
                    bg-white
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-black
                    transition
                    hover:border-black
                  "
                >
                  <Phone size={15} />

                  +94 75 454 6492
                </a>

              </div>

            </MotionDiv>



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
              viewport={{
                once: true,
              }}
              className="
                relative
                overflow-hidden
                rounded-[34px]
                bg-black
                p-8
                text-white
                md:p-10
              "
            >

              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]" />


              <div className="relative">

                <BrainCircuit
                  size={28}
                  className="text-orange-400"
                />


                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                  What We&apos;re Building
                </p>



                <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight">
                  A smarter way to start a digital project conversation.
                </h3>



                <div className="mt-8 space-y-3">

                  {[
                    "Understand your business idea",
                    "Recommend suitable digital directions",
                    "Explain relevant Infinotech services",
                    "Help prepare your project requirements",
                  ].map(
                    (item, index) => (

                      <div
                        key={item}
                        className="
                          flex
                          items-center
                          gap-4
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.05]
                          px-5
                          py-4
                        "
                      >

                        <div
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-white/10
                            text-xs
                            font-semibold
                            text-orange-400
                          "
                        >
                          {index + 1}
                        </div>


                        <p className="text-sm text-white/60">
                          {item}
                        </p>

                      </div>

                    )
                  )}

                </div>



                <div className="mt-8 border-t border-white/10 pt-7">

                  <p className="text-xs leading-6 text-white/35">
                    Need help now? You don&apos;t have to wait for the AI.
                  </p>


                  <Link
                    href="/contact"
                    className="
                      group
                      mt-3
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    Contact the Infinotech team

                    <ArrowUpRight
                      size={15}
                      className="
                        text-orange-400
                        transition-transform
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />

                  </Link>

                </div>

              </div>

            </MotionDiv>

          </div>

        </div>

      </section>



      {/* ==================================
          TECHNOLOGY ECOSYSTEM
      =================================== */}

      <section className="border-y border-black/10 bg-[#f7f7f7] py-24 md:py-28">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">

            <div>

              <BrainCircuit
                size={28}
                className="text-orange-500"
              />


              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                AI Ecosystem
              </p>


              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Technologies we explore and integrate.
              </h2>


              <p className="mt-4 max-w-lg text-sm leading-7 text-black/50">
                Technology is selected according to the project rather
                than forcing every AI solution into the same stack.
              </p>

            </div>



            <div className="flex flex-wrap gap-3">

              {technologies.map(
                (technology, index) => (

                  <MotionDiv
                    key={technology}
                    initial={{
                      opacity: 0,
                      y: 12,
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
                        0.035,
                    }}
                    className="
                      rounded-full
                      border
                      border-black/10
                      bg-white
                      px-4
                      py-2.5
                      text-sm
                      font-medium
                      text-black/55
                      transition
                      hover:-translate-y-1
                      hover:border-orange-200
                      hover:text-orange-600
                    "
                  >
                    {technology}
                  </MotionDiv>

                )
              )}

            </div>

          </div>

        </div>

      </section>



      {/* ==================================
          PROCESS
      =================================== */}

      <section className="relative overflow-hidden bg-black py-28 text-white md:py-32">

        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[150px]" />



        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
            AI Development Process
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
            Start with the problem.
            <br />


            <span className="text-white/30">
              Then choose the intelligence.
            </span>

          </h2>



          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {process.map(
              (item, index) => (

                <MotionDiv
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 24,
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
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-7
                    transition
                    hover:-translate-y-2
                    hover:border-orange-400/30
                    hover:bg-white/[0.07]
                  "
                >

                  <p className="text-sm font-semibold text-orange-400">
                    {item.number}
                  </p>


                  <h3 className="mt-8 text-2xl font-semibold">
                    {item.title}
                  </h3>


                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {item.text}
                  </p>

                </MotionDiv>

              )
            )}

          </div>

        </div>

      </section>



      {/* ==================================
          FINAL CTA
      =================================== */}

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
              px-8
              py-16
              md:px-12
              md:py-20
              lg:px-16
            "
          >

            <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full bg-orange-200/60 blur-[100px]" />



            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                  Build With AI
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
                  Have an AI idea?
                  <br />


                  <span className="text-black/30">
                    Let&apos;s explore what&apos;s possible.
                  </span>

                </h2>



                <p className="mt-7 max-w-2xl text-lg leading-8 text-black/50">
                  Whether you&apos;re exploring an AI assistant,
                  automation or intelligence inside an existing digital
                  product, start with the business problem and talk with
                  our team.
                </p>

              </div>



              <div className="flex flex-wrap gap-3">

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
                  Talk With Us

                  <ArrowUpRight
                    size={17}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </Link>



                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-black/15
                    bg-white
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-black
                    transition
                    hover:-translate-y-1
                    hover:border-orange-300
                    hover:bg-orange-50
                    hover:text-orange-600
                  "
                >
                  <MessageCircle size={16} />

                  WhatsApp Us
                </a>

              </div>

            </div>

          </MotionDiv>

        </div>

      </section>

    </main>
  );
}