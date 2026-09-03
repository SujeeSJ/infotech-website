"use client";

import {
  FormEvent,
  ReactNode,
  useState,
} from "react";

import PhoneInput, {
  isValidPhoneNumber,
} from "react-phone-number-input";

import "react-phone-number-input/style.css";

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



  const [sending, setSending] =
    useState(false);



  const [success, setSuccess] =
    useState(false);



  const [error, setError] =
    useState("");




  function updateField(
    field: string,
    value: string
  ) {

    setForm((current) => ({

      ...current,

      [field]: value,

    }));

  }





  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {


    event.preventDefault();


    setError("");



    if (!isValidPhoneNumber(form.phone)) {


      setError(
        "Please enter a valid phone number."
      );


      return;


    }



    setSending(true);



    try {


      const response = await fetch(
        "/api/contact",
        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

          },


          body: JSON.stringify(form),

        }
      );



      const data =
        await response.json();



      if (data.success) {


        setSuccess(true);



        setForm({

          name: "",
          company: "",
          phone: "",
          email: "",
          service: "",
          budget: "",
          message: "",

        });



      }
      else {


        setError(
          "Something went wrong. Please try again."
        );


      }



    }

    catch(error) {


      console.log(error);


      setError(
        "Unable to send enquiry. Please try again."
      );


    }



    finally {


      setSending(false);


    }


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
            opacity:0,
            y:25,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:0.7,
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

            <Sparkles size={13}/>

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

            <br/>


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

            Tell us what you&apos;re trying to build, improve or automate.
            We&apos;ll help you explore the right digital approach for your business.

          </p>


        </MotionDiv>


      </div>


    </section>





    {/* CONTACT AREA */}


    <section className="relative bg-[#f7f7f7] py-24 md:py-28">


      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-10 xl:px-16">


        {/* LEFT AREA */}

        <MotionDiv

          initial={{
            opacity:0,
            x:-25,
          }}

          whileInView={{
            opacity:1,
            x:0,
          }}

          viewport={{
            once:true,
          }}

          transition={{
            duration:0.65,
          }}

          className="space-y-5"

        >


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


            <div className="relative">


              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">

                Direct Contact

              </p>


              <h2 className="mt-5 text-3xl font-semibold tracking-tight">

                Prefer to talk directly?

              </h2>


              <p className="mt-4 text-sm leading-7 text-white/50">

                Call or message Infinotech directly to discuss your business,
                project idea or digital requirements.

              </p>



              <div className="mt-8 space-y-3">


                <a
                  href="tel:+94754546492"
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-4
                  "
                >

                  <div className="flex items-center gap-3">

                    <Phone size={17}/>


                    <div>

                      <p className="text-[10px] uppercase tracking-[0.16em] opacity-45">

                        Call

                      </p>


                      <p className="mt-1 text-sm font-semibold">

                        +94 75 454 6492

                      </p>


                    </div>


                  </div>


                </a>



                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-4
                  "
                >

                  <div className="flex items-center gap-3">


                    <MessageCircle size={17}/>


                    <div>

                      <p className="text-[10px] uppercase tracking-[0.16em] opacity-45">

                        WhatsApp

                      </p>


                      <p className="mt-1 text-sm font-semibold">

                        Quick reply on WhatsApp

                      </p>


                    </div>


                  </div>


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

                Infinotech works digitally with businesses and entrepreneurs
                across different locations and markets.

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

                <Bot size={18}/>

              </div>



              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">

                Infinotech AI

              </p>


              <h3 className="mt-3 text-xl font-semibold">

                AI assistant in development.

              </h3>


              <p className="mt-3 text-sm leading-7 text-black/50">

                Infinotech AI is currently being improved.
                For quick support, contact our team directly.

              </p>



              <a

                href={WHATSAPP_URL}

                target="_blank"

                rel="noopener noreferrer"

                className="
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

                <ArrowUpRight size={15}/>

              </a>


            </div>


          </MotionDiv>






          {/* FORM */}


          <MotionDiv

            initial={{
              opacity:0,
              x:25,
            }}

            whileInView={{
              opacity:1,
              x:0,
            }}

            viewport={{
              once:true,
            }}

            transition={{
              duration:0.65,
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



            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">

              Project Enquiry

            </p>



            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">

              Tell us about your project.

            </h2>



            <p className="mt-4 text-sm leading-7 text-black/50">

              Share as much as you know.
              You don&apos;t need to have everything figured out.

            </p>





            <div className="mt-10 grid gap-5 md:grid-cols-2">


              <Field label="Your Name *">

                <input

                  required

                  value={form.name}

                  onChange={(e)=>
                    updateField(
                      "name",
                      e.target.value
                    )
                  }

                  className={inputStyle}

                  placeholder="Your name"

                />


              </Field>




              <Field label="Company / Business">


                <input

                  value={form.company}

                  onChange={(e)=>
                    updateField(
                      "company",
                      e.target.value
                    )
                  }

                  className={inputStyle}

                  placeholder="Business name"

                />


              </Field>


            </div>





            <div className="mt-5 grid gap-5 md:grid-cols-2">


              <Field label="Phone / WhatsApp *">


                <PhoneInput

                  international

                  defaultCountry="LK"

                  value={form.phone}

                  onChange={(value)=>
                    updateField(
                      "phone",
                      value || ""
                    )
                  }

                  placeholder="+94 75 454 6492"

                  className="
                    flex
                    w-full
                    rounded-2xl
                    border
                    border-black/10
                    bg-[#fafafa]
                    px-4
                    py-4
                    text-sm
                    focus-within:border-orange-400
                    focus-within:bg-white
                  "

                />


              </Field>





              <Field label="Email">


                <input

                  value={form.email}

                  onChange={(e)=>
                    updateField(
                      "email",
                      e.target.value
                    )
                  }


                  type="email"

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

    onChange={(e)=>
      updateField(
        "service",
        e.target.value
      )
    }

    className={inputStyle}

  >

    <option value="">
      Select a service
    </option>


    {services.map((service)=>(

      <option
        key={service}
        value={service}
      >

        {service}

      </option>

    ))}


  </select>


</Field>


</div>





{/* BUDGET */}


<div className="mt-5">


<Field label="Estimated Budget">


  <select

    value={form.budget}

    onChange={(e)=>
      updateField(
        "budget",
        e.target.value
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

    onChange={(e)=>
      updateField(
        "message",
        e.target.value
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

disabled={sending}

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
  hover:bg-orange-500
  disabled:opacity-50
  sm:w-auto
  sm:min-w-[260px]
"

>


<span className="flex items-center gap-3">


  <Send size={17}/>


  {sending
    ? "Sending..."
    : "Send Project Enquiry"}


</span>



<ArrowUpRight size={17}/>


</button>




<p className="mt-4 text-xs leading-5 text-black/35">

Your enquiry will be sent securely to our team.
We will contact you shortly.

</p>




{error && (

<p className="mt-3 text-sm font-medium text-red-500">

  {error}

</p>

)}






{success && (

<div
  className="
    mt-8
    rounded-[28px]
    border
    border-green-200
    bg-green-50
    p-6
  "
>


  <div className="flex gap-4">


    <CheckCircle2
      size={28}
      className="text-green-600"
    />


    <div>


      <h3 className="text-xl font-semibold">

        Thank you!

      </h3>


      <p className="mt-2 text-sm text-black/55">

        Your project enquiry has been received.
        Our team will review your requirements
        and contact you shortly.

      </p>



      <a

        href={WHATSAPP_URL}

        target="_blank"

        rel="noopener noreferrer"

        className="
          mt-5
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-black
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          hover:bg-orange-500
        "

      >

        <MessageCircle size={16}/>

        Chat on WhatsApp

        <ArrowUpRight size={15}/>


      </a>


    </div>


  </div>


</div>

)}



</form>


</MotionDiv>


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

}:{

label:string;

children:ReactNode;

}) {


return (

<label className="block">


<span className="
mb-2.5
block
text-xs
font-semibold
uppercase
tracking-[0.15em]
text-black/40
">

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