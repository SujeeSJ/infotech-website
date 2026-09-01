import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=94754546492&text&type=phone_number&app_absent=0";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "AI Lab", href: "/ai-lab" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  "Web Development",
  "Web Applications",
  "Mobile Applications",
  "Custom Software",
  "UI/UX Design",
  "AI & Automation",
  "Cloud & DevOps",
  "E-Commerce",
  "Digital Growth",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#070707]
        text-white
      "
    >
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            -left-40
            top-20
            h-[480px]
            w-[480px]
            rounded-full
            bg-orange-500/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[480px]
            w-[480px]
            rounded-full
            bg-rose-500/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]
            bg-[size:72px_72px]
          "
        />

      </div>


      <div
        className="
          relative
          mx-auto
          max-w-[1400px]
          px-6
          pb-8
          pt-16
          lg:px-10
          lg:pt-20
          xl:px-16
        "
      >

        {/* BIG CTA */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[34px]
            border
            border-white/10
            bg-white/[0.045]
            px-7
            py-10
            backdrop-blur-xl
            md:px-10
            md:py-12
            lg:px-12
          "
        >

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-72
              w-72
              rounded-full
              bg-orange-500/20
              blur-[100px]
            "
          />


          <div
            className="
              relative
              grid
              gap-10
              lg:grid-cols-[1fr_auto]
              lg:items-end
            "
          >

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
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-orange-400
                "
              >
                <Sparkles size={12} />

                Start Something New
              </div>


              <h2
                className="
                  mt-6
                  max-w-4xl
                  text-4xl
                  font-semibold
                  leading-[1]
                  tracking-[-0.045em]
                  md:text-5xl
                  lg:text-6xl
                "
              >
                Have an idea?
                <br />

                <span className="text-white/30">
                  Let&apos;s make it real.
                </span>
              </h2>


              <p
                className="
                  mt-6
                  max-w-2xl
                  text-sm
                  leading-7
                  text-white/45
                  md:text-base
                "
              >
                Tell us what you&apos;re trying to build, improve or
                automate. We&apos;ll help you explore the right digital
                direction.
              </p>

            </div>



            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-3">

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
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
                Talk With Us

                <ArrowUpRight
                  size={16}
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
                  border-white/15
                  bg-white/5
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-400/40
                  hover:bg-orange-500
                "
              >
                <MessageCircle size={16} />

                WhatsApp
              </a>

            </div>

          </div>

        </div>



        {/* MAIN FOOTER */}
        <div
          className="
            grid
            gap-14
            py-16
            lg:grid-cols-[1.05fr_0.95fr]
          "
        >

          {/* BRAND SIDE */}
          <div>

            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Infinotech home"
            >
              <Image
                src="/logo/infinotech-logo.png"
                alt="Infinotech"
                width={190}
                height={55}
                className="
                  h-auto
                  w-[165px]
                  brightness-0
                  invert
                  md:w-[180px]
                "
              />
            </Link>


            <p
              className="
                mt-7
                max-w-xl
                text-base
                leading-8
                text-white/45
              "
            >
              A digital technology brand focused on building modern
              websites, applications, software, AI-powered solutions and
              digital experiences.
            </p>


            <div
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-2
                text-xs
                font-medium
                text-white/45
              "
            >
              <Sparkles
                size={13}
                className="text-orange-400"
              />

              Infinite ideas. Engineered into reality.
            </div>



            {/* DIRECT CONTACT */}
            <div className="mt-9">

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/25
                "
              >
                Direct Contact
              </p>


              <div className="mt-4 flex flex-wrap gap-3">

                <a
                  href="tel:+94754546492"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-4
                    py-3
                    text-sm
                    text-white/60
                    transition
                    hover:border-white/20
                    hover:bg-white/[0.08]
                    hover:text-white
                  "
                >
                  <Phone
                    size={15}
                    className="text-orange-400"
                  />

                  +94 75 454 6492
                </a>


                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-4
                    py-3
                    text-sm
                    text-white/60
                    transition
                    hover:border-orange-400/30
                    hover:bg-orange-500
                    hover:text-white
                  "
                >
                  <MessageCircle size={15} />

                  Quick reply on WhatsApp
                </a>

              </div>

            </div>

          </div>



          {/* LINKS SIDE */}
          <div
            className="
              grid
              gap-10
              sm:grid-cols-2
              lg:gap-14
            "
          >

            {/* COMPANY */}
            <div>

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/25
                "
              >
                Explore
              </p>


              <div className="mt-6 flex flex-col gap-4">

                {companyLinks.map((link) => (

                  <Link
                    key={link.label}
                    href={link.href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-sm
                      text-white/55
                      transition
                      hover:text-white
                    "
                  >
                    {link.label}

                    <ArrowUpRight
                      size={13}
                      className="
                        opacity-0
                        transition-all
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:opacity-100
                      "
                    />
                  </Link>

                ))}

              </div>

            </div>



            {/* CAPABILITIES */}
            <div>

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/25
                "
              >
                Capabilities
              </p>


              <div className="mt-6 flex flex-col gap-4">

                {serviceLinks.map((service) => (

                  <Link
                    key={service}
                    href="/services"
                    className="
                      w-fit
                      text-sm
                      text-white/55
                      transition
                      hover:text-white
                    "
                  >
                    {service}
                  </Link>

                ))}

              </div>

            </div>

          </div>

        </div>



        {/* SOCIAL AREA */}
        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            py-7
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <div>

            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/25
              "
            >
              Connect With Us
            </p>

            <p className="mt-2 text-xs text-white/35">
              Follow Infinotech online.
            </p>

          </div>



          {/* REAL LINKS WILL BE ADDED LATER */}
          <div className="flex flex-wrap gap-2">

            {[
              "Instagram",
              "Facebook",
              "LinkedIn",
            ].map((social) => (

              <span
                key={social}
                className="
                  rounded-full
                  border
                  border-white/10
                  px-4
                  py-2
                  text-xs
                  text-white/25
                "
              >
                {social}
              </span>

            ))}

          </div>

        </div>



        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-7
            text-[11px]
            text-white/25
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p>
            © {year} Infinotech. All rights reserved.
          </p>


          <div
            className="
              flex
              flex-col
              gap-2
              sm:flex-row
              sm:items-center
              sm:gap-5
            "
          >

            <p>
              A digital technology brand under Apexx Private Limited.
            </p>


            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />


            <p>
              Established 8 December 2020
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}