import Link from "next/link";

import {
  ArrowLeft,
  ArrowUpRight,
  Home,
  SearchX,
} from "lucide-react";

import MotionDiv from "@/components/MotionDiv";


export default function NotFound() {
  return (
    <main className="relative flex min-h-[78vh] items-center overflow-hidden bg-white px-6 pb-24 pt-40 text-black">

      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[8%] top-20 h-[420px] w-[420px] rounded-full bg-orange-100/70 blur-[140px]" />

        <div className="absolute right-[8%] top-28 h-[420px] w-[420px] rounded-full bg-rose-100/45 blur-[140px]" />

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


      <div className="relative mx-auto w-full max-w-[1200px]">

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
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-black/10
            bg-white/90
            p-8
            shadow-[0_35px_100px_rgba(0,0,0,0.08)]
            backdrop-blur-xl
            md:p-12
            lg:p-16
          "
        >

          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-100 blur-[100px]" />


          <div className="relative grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

            {/* LEFT */}

            <div>

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-black
                  text-white
                "
              >
                <SearchX size={22} />
              </div>


              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                Error 404
              </p>


              <p className="mt-3 text-sm leading-7 text-black/45">
                The page you&apos;re looking for may have moved,
                changed or no longer exists.
              </p>

            </div>



            {/* RIGHT */}

            <div>

              <h1
                className="
                  max-w-4xl
                  text-[clamp(3.6rem,7vw,7rem)]
                  font-semibold
                  leading-[0.92]
                  tracking-[-0.06em]
                "
              >
                This page
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
                  went off the map.
                </span>
              </h1>


              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/50">
                Head back to the homepage or explore our work and
                services to continue browsing Infinotech.
              </p>


              <div className="mt-9 flex flex-wrap gap-3">

                <Link
                  href="/"
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
                  <Home size={16} />

                  Back Home

                  <ArrowUpRight
                    size={16}
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
                    hover:border-black
                  "
                >
                  <ArrowLeft size={16} />

                  Explore Work
                </Link>

              </div>

            </div>

          </div>

        </MotionDiv>

      </div>

    </main>
  );
}