"use client";

import {
  FormEvent,
  ReactNode,
  useState,
} from "react";

import MotionDiv from "@/components/MotionDiv";

import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Globe2,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";


const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=94754546492&text&type=phone_number&app_absent=0";


/* ----------------------------------
   SERVICES
----------------------------------- */

const services = [
  "Website Development",
  "Web Application",
  "Mobile Application",
  "Custom Software",
  "UI/UX Design",
  "AI & Automation",
  "Cloud & DevOps",
  "E-Commerce",
  "Digital Marketing",
  "Other",
];


/* ----------------------------------
   CONTACT CLIENT
----------------------------------- */

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });


  function updateField(
    field: string,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }


  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();


    const message = `
Hello Infinotech,

I would like to discuss a project.

Name: ${form.name}
Company / Business: ${form.company || "Not provided"}
Phone / WhatsApp: ${form.phone}
Email: ${form.email || "Not provided"}
Service: ${form.service}
Budget Range: ${form.budget || "Not specified"}

Project Details:
${form.message}
    `.trim();


    const whatsappUrl =
      `https://api.whatsapp.com/send/?phone=94754546492&text=${encodeURIComponent(
        message
      )}&type=phone_number&app_absent=0`;


    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }


  return (
    <main className="overflow-hidden bg-white text-black">

      {/* HERO */}

      <section className="relative overflow-hidden pb-24 pt-40 md:pb-28">

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[8%] top-20 h-[460px] w-[460px] rounded-full bg-orange-100/70 blur-[140px]" />


          <div className="absolute right-[5%] top-24 h-[460px] w-[460px] rounded-full bg-rose-100/45 blur-[140px]" />


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

              Start A Project
            </div>


            <h1
              className="
                mt-8
                max-w-6xl
                text-[clamp(3.8rem,7vw,7.4rem)]
                font-semibold
                leading-[0.91]
                tracking-[-0.06em]
              "
            >
              Have an idea?
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
                Let&apos;s build what&apos;s next.
              </span>

            </h1>


            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/55 md:text-xl">
              Tell us what you&apos;re trying to build, improve or
              automate. We&apos;ll help you explore the right digital
              approach for your business.
            </p>

          </MotionDiv>

        </div>

      </section>



      {/* CONTACT AREA */}

      <section className="relative bg-[#f7f7f7] py-24 md:py-28">

        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-10 xl:px-16">

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
            transition={{
              duration: 0.65,
            }}
            className="space-y-5"
          >

            {/* CONTACT CARD */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                bg-black
                p-8
                text-white
                md:p-10
              "
            >

              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-orange-500/25 blur-[90px]" />


              <div className="relative">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                  Direct Contact
                </p>


                <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                  Prefer to talk directly?
                </h2>


                <p className="mt-4 text-sm leading-7 text-white/50">
                  Call or message Infinotech directly to discuss your
                  business, project idea or digital requirements.
                </p>



                <div className="mt-8 space-y-3">

                  {/* CALL */}

                  <a
                    href="tel:+94754546492"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-4
                      transition
                      hover:bg-white
                      hover:text-black
                    "
                  >

                    <div className="flex items-center gap-3">

                      <Phone size={17} />


                      <div>

                        <p className="text-[10px] uppercase tracking-[0.16em] opacity-45">
                          Call
                        </p>


                        <p className="mt-1 text-sm font-semibold">
                          +94 75 454 6492
                        </p>

                      </div>

                    </div>


                    <ArrowUpRight
                      size={16}
                      className="
                        opacity-50
                        transition
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />

                  </a>



                  {/* WHATSAPP */}

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-4
                      transition
                      hover:bg-white
                      hover:text-black
                    "
                  >

                    <div className="flex items-center gap-3">

                      <MessageCircle size={17} />


                      <div>

                        <p className="text-[10px] uppercase tracking-[0.16em] opacity-45">
                          WhatsApp
                        </p>


                        <p className="mt-1 text-sm font-semibold">
                          Quick reply on WhatsApp
                        </p>

                      </div>

                    </div>


                    <ArrowUpRight
                      size={16}
                      className="
                        opacity-50
                        transition
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />

                  </a>

                </div>

              </div>

            </div>



            {/* GLOBAL */}

            <div
              className="
                rounded-[30px]
                border
                border-black/10
                bg-white
                p-8
              "
            >

              <Globe2
                size={22}
                className="text-orange-500"
              />


              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-black/35">
                Global Collaboration
              </p>


              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Working beyond borders.
              </h3>


              <p className="mt-4 text-sm leading-7 text-black/50">
                Infinotech works digitally with businesses and
                entrepreneurs across different locations and markets.
              </p>

            </div>



            {/* AI */}

            <div
              className="
                rounded-[30px]
                border
                border-orange-200
                bg-orange-50
                p-8
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-black
                  text-white
                "
              >
                <Bot size={18} />
              </div>


              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                Infinotech AI
              </p>


              <h3 className="mt-3 text-xl font-semibold">
                AI assistant in development.
              </h3>


              <p className="mt-3 text-sm leading-7 text-black/50">
                Infinotech AI is currently being improved and can help
                visitors explore our services and think through project
                ideas. For a quick or important response, contact our
                team directly on WhatsApp.
              </p>


              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-black
                "
              >
                Chat with our team

                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>

            </div>

          </MotionDiv>



          {/* FORM */}

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
            transition={{
              duration: 0.65,
            }}
          >

            <form
              onSubmit={handleSubmit}
              className="
                rounded-[34px]
                border
                border-black/10
                bg-white
                p-7
                shadow-[0_30px_100px_rgba(0,0,0,0.06)]
                sm:p-9
                lg:p-10
              "
            >

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                  Project Enquiry
                </p>


                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Tell us about your project.
                </h2>


                <p className="mt-4 max-w-2xl text-sm leading-7 text-black/50">
                  Share as much as you know. You don&apos;t need to have
                  everything figured out before contacting us.
                </p>

              </div>



              {/* NAME + COMPANY */}

              <div className="mt-10 grid gap-5 md:grid-cols-2">

                <Field label="Your Name *">

                  <input
                    required
                    value={form.name}
                    onChange={(event) =>
                      updateField(
                        "name",
                        event.target.value
                      )
                    }
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className={inputStyle}
                  />

                </Field>



                <Field label="Company / Business">

                  <input
                    value={form.company}
                    onChange={(event) =>
                      updateField(
                        "company",
                        event.target.value
                      )
                    }
                    type="text"
                    autoComplete="organization"
                    placeholder="Business name"
                    className={inputStyle}
                  />

                </Field>

              </div>



              {/* PHONE + EMAIL */}

              <div className="mt-5 grid gap-5 md:grid-cols-2">

                <Field label="Phone / WhatsApp *">

                  <input
                    required
                    value={form.phone}
                    onChange={(event) =>
                      updateField(
                        "phone",
                        event.target.value
                      )
                    }
                    type="tel"
                    autoComplete="tel"
                    placeholder="+94..."
                    className={inputStyle}
                  />

                </Field>



                <Field label="Email">

                  <input
                    value={form.email}
                    onChange={(event) =>
                      updateField(
                        "email",
                        event.target.value
                      )
                    }
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={inputStyle}
                  />

                </Field>

              </div>



              {/* SERVICE */}

              <div className="mt-5">

                <Field label="What do you need? *">

                  <select
                    required
                    value={form.service}
                    onChange={(event) =>
                      updateField(
                        "service",
                        event.target.value
                      )
                    }
                    className={inputStyle}
                  >

                    <option value="">
                      Select a service
                    </option>


                    {services.map(
                      (service) => (

                        <option
                          key={service}
                          value={service}
                        >
                          {service}
                        </option>

                      )
                    )}

                  </select>

                </Field>

              </div>



              {/* BUDGET */}

              <div className="mt-5">

                <Field label="Estimated Budget">

                  <select
                    value={form.budget}
                    onChange={(event) =>
                      updateField(
                        "budget",
                        event.target.value
                      )
                    }
                    className={inputStyle}
                  >

                    <option value="">
                      Prefer to discuss
                    </option>


                    <option value="Small project / starter">
                      Small project / starter
                    </option>


                    <option value="Growing business project">
                      Growing business project
                    </option>


                    <option value="Custom / advanced project">
                      Custom / advanced project
                    </option>


                    <option value="Enterprise / long-term">
                      Enterprise / long-term
                    </option>

                  </select>

                </Field>

              </div>



              {/* MESSAGE */}

              <div className="mt-5">

                <Field label="Tell us about your idea *">

                  <textarea
                    required
                    value={form.message}
                    onChange={(event) =>
                      updateField(
                        "message",
                        event.target.value
                      )
                    }
                    rows={7}
                    placeholder="What are you trying to build? What problem are you trying to solve?"
                    className={`${inputStyle} resize-none`}
                  />

                </Field>

              </div>



              {/* SUBMIT */}

              <button
                type="submit"
                className="
                  group
                  mt-7
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-2xl
                  bg-black
                  px-6
                  py-5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-orange-500
                  sm:w-auto
                  sm:min-w-[260px]
                "
              >

                <span className="flex items-center gap-3">

                  <Send size={17} />

                  Send Project Enquiry

                </span>


                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </button>


              <p className="mt-4 text-xs leading-5 text-black/35">
                Your enquiry will open in WhatsApp so you can review it
                before sending.
              </p>

            </form>

          </MotionDiv>

        </div>

      </section>



      {/* WHAT HAPPENS NEXT */}

      <section className="bg-white py-28">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">

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

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                What Happens Next
              </p>


              <h2
                className="
                  mt-6
                  text-4xl
                  font-semibold
                  leading-[1]
                  tracking-[-0.045em]
                  md:text-5xl
                "
              >
                Simple conversation.
                <br />

                <span className="text-black/30">
                  Clear next steps.
                </span>

              </h2>

            </MotionDiv>



            <div className="grid gap-4 md:grid-cols-3">

              {[
                {
                  number: "01",

                  title:
                    "We Understand",

                  text:
                    "We review your idea, business and what you're trying to achieve.",
                },

                {
                  number: "02",

                  title:
                    "We Recommend",

                  text:
                    "We discuss the right solution, features and project direction.",
                },

                {
                  number: "03",

                  title:
                    "We Build",

                  text:
                    "Once the direction is agreed, the project moves into design and development.",
                },
              ].map(
                (item, index) => (

                  <MotionDiv
                    key={item.number}
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
                    transition={{
                      delay:
                        index *
                        0.07,
                    }}
                    className="
                      rounded-[28px]
                      border
                      border-black/10
                      bg-[#fafafa]
                      p-7
                    "
                  >

                    <CheckCircle2
                      size={20}
                      className="text-orange-500"
                    />


                    <p className="mt-7 text-xs font-semibold text-black/30">
                      {item.number}
                    </p>


                    <h3 className="mt-3 text-xl font-semibold">
                      {item.title}
                    </h3>


                    <p className="mt-3 text-sm leading-7 text-black/45">
                      {item.text}
                    </p>

                  </MotionDiv>

                )
              )}

            </div>

          </div>

        </div>

      </section>



      {/* SOCIAL PLACEHOLDER */}

      <section className="border-t border-black/10 bg-[#fafafa] py-20">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-16">

          <div
            className="
              flex
              flex-col
              gap-6
              rounded-[30px]
              border
              border-black/10
              bg-white
              px-8
              py-8
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                Connect With Infinotech
              </p>


              <h3 className="mt-3 text-2xl font-semibold">
                Follow our digital journey.
              </h3>

            </div>



            <div className="flex flex-wrap gap-3">

              {[
                "Instagram",
                "Facebook",
                "LinkedIn",
              ].map(
                (social) => (

                  <span
                    key={social}
                    className="
                      rounded-full
                      border
                      border-black/10
                      bg-[#fafafa]
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-black/35
                    "
                  >
                    {social} — coming soon
                  </span>

                )
              )}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* ----------------------------------
   FORM FIELD
----------------------------------- */

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">

      <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.15em] text-black/40">
        {label}
      </span>

      {children}

    </label>
  );
}


/* ----------------------------------
   INPUT STYLE
----------------------------------- */

const inputStyle = `
  w-full
  rounded-2xl
  border
  border-black/10
  bg-[#fafafa]
  px-4
  py-4
  text-sm
  text-black
  outline-none
  transition
  placeholder:text-black/30
  focus:border-orange-400
  focus:bg-white
  focus:ring-4
  focus:ring-orange-100
`;