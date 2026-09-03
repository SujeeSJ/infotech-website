"use client";

import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowUpRight,
  Bot,
  LoaderCircle,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";


type Message = {

  role: "user" | "assistant";

  content: string;

  isError?: boolean;

};



const WHATSAPP_URL =
"https://api.whatsapp.com/send/?phone=94754546492&text&type=phone_number&app_absent=0";





const starterMessage: Message = {

  role:"assistant",

  content:
  "Hi 👋 I'm Infinotech AI. I can help you explore websites, apps, software solutions, automation and AI ideas for your business. How can I help you today?"

};





const quickQuestions = [

  "I need a website",

  "I want a mobile app",

  "How can AI help my business?",

  "What services do you offer?",

];






export default function InfinotechAI(){



const [open,setOpen] =
useState(false);



const [messages,setMessages] =
useState<Message[]>([
  starterMessage
]);



const [input,setInput] =
useState("");



const [loading,setLoading] =
useState(false);



const bottomRef =
useRef<HTMLDivElement>(null);





/*
 SESSION MEMORY
*/

useEffect(()=>{


const saved =
sessionStorage.getItem(
"infinotech-ai-chat"
);



if(saved){

  try{

    setMessages(
      JSON.parse(saved)
    );

  }

  catch{

    setMessages([
      starterMessage
    ]);

  }

}


},[]);






useEffect(()=>{


sessionStorage.setItem(

"infinotech-ai-chat",

JSON.stringify(messages)

);


},[messages]);





useEffect(()=>{


bottomRef.current?.scrollIntoView({

behavior:"smooth"

});


},[messages,loading]);





async function sendMessage(
customText?:string
){


const text =
(customText || input)
.trim();



if(!text || loading)
return;



const userMessage:Message={

role:"user",

content:text.slice(0,1000)

};




const newMessages=[

...messages,

userMessage

];



setMessages(newMessages);


setInput("");


setLoading(true);



try{


const response =
await fetch(

"/api/ai",

{

method:"POST",

headers:{

"Content-Type":
"application/json"

},


body:JSON.stringify({

messages:
newMessages.map(
({role,content})=>({

role,

content

})

)

})

}

);




const data =
await response.json();





if(!response.ok){

throw new Error(

data.error ||
"AI request failed"

);

}





setMessages(current=>[

...current,

{

role:"assistant",

content:

data.message ||

"Please try again."

}

]);



}
catch(error){


console.error(

"Infinotech AI Error:",

error

);



setMessages(current=>[

...current,

{

role:"assistant",

content:

"I'm having trouble connecting right now. Please try again or contact our team directly on WhatsApp.",

isError:true

}

]);



}
finally{


setLoading(false);


}


}
function handleSubmit(
  event: FormEvent<HTMLFormElement>
) {

  event.preventDefault();

  sendMessage();

}







return (

  <>


    {/* CHAT WINDOW */}


    {open && (

      <div

        className="
          fixed
          bottom-24
          right-4
          z-[9998]
          flex
          h-[620px]
          max-h-[calc(100vh-120px)]
          w-[calc(100vw-32px)]
          max-w-[420px]
          flex-col
          overflow-hidden
          rounded-[28px]
          border
          border-black/10
          bg-white
          shadow-[0_30px_100px_rgba(0,0,0,0.25)]
          md:right-7
        "

      >



        {/* HEADER */}


        <div
          className="
            border-b
            border-black/10
            bg-white
            px-5
            py-4
          "
        >


          <div
            className="
              flex
              items-center
              justify-between
            "
          >



            <div
              className="
                flex
                items-center
                gap-3
              "
            >



              <div

                className="
                  relative
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

                <Bot size={21}/>


                <span

                  className="
                    absolute
                    -right-1
                    -top-1
                    h-3
                    w-3
                    rounded-full
                    border-2
                    border-white
                    bg-green-500
                  "

                />


              </div>





              <div>


                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >

                  <h3
                    className="
                      font-semibold
                      text-black
                    "
                  >

                    Infinotech AI

                  </h3>


                  <Sparkles
                    size={14}
                    className="text-orange-500"
                  />


                </div>



                <div
                  className="
                    mt-0.5
                    flex
                    items-center
                    gap-2
                  "
                >

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-green-500
                    "
                  />


                  <p
                    className="
                      text-xs
                      text-black/45
                    "
                  >

                    Online Assistant

                  </p>


                </div>


              </div>


            </div>





            <button

              type="button"

              onClick={() =>
                setOpen(false)
              }

              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                text-black/50
                transition
                hover:bg-black/5
                hover:text-black
              "

            >

              <X size={18}/>

            </button>



          </div>


        </div>






        {/* INFO */}


        <div

          className="
            border-b
            border-orange-100
            bg-orange-50
            px-5
            py-3
          "

        >

          <div
            className="
              flex
              items-start
              gap-3
            "
          >


            <Sparkles
              size={14}
              className="
                mt-0.5
                shrink-0
                text-orange-500
              "
            />


            <p
              className="
                text-[11px]
                leading-5
                text-black/55
              "
            >

              Ask about websites, applications,
              AI solutions, automation or your
              next digital project.

            </p>


          </div>


        </div>





        {/* MESSAGES */}


        <div

          className="
            flex-1
            space-y-4
            overflow-y-auto
            bg-[#fafafa]
            p-5
          "

        >


          {messages.map(
            (message,index)=>(

              <div

                key={index}

                className={
                  message.role === "user"
                  ? "flex justify-end"
                  : "flex justify-start"
                }

              >


                <div

                  className={
                    message.role === "user"

                    ? `
                      max-w-[82%]
                      rounded-[20px]
                      rounded-br-md
                      bg-black
                      px-4
                      py-3
                      text-sm
                      leading-6
                      text-white
                    `

                    : message.isError

                    ? `
                      max-w-[90%]
                      rounded-[20px]
                      rounded-bl-md
                      border
                      border-orange-200
                      bg-orange-50
                      px-4
                      py-4
                      text-sm
                      leading-6
                      text-black/70
                    `

                    :

                    `
                      max-w-[88%]
                      rounded-[20px]
                      rounded-bl-md
                      border
                      border-black/5
                      bg-white
                      px-4
                      py-3
                      text-sm
                      leading-6
                      text-black/70
                      shadow-sm
                    `
                  }

                >


                  <p
                    className="
                      whitespace-pre-wrap
                    "
                  >

                    {message.content}

                  </p>

                  {message.isError && (

<a

  href={WHATSAPP_URL}

  target="_blank"

  rel="noopener noreferrer"

  className="
    group
    mt-4
    flex
    items-center
    justify-between
    gap-3
    rounded-xl
    bg-black
    px-4
    py-3
    text-xs
    font-semibold
    text-white
    transition
    hover:bg-orange-500
  "

>


  <span className="flex items-center gap-2">

    <MessageCircle size={15}/>

    Chat on WhatsApp

  </span>



  <ArrowUpRight

    size={14}

    className="
      transition-transform
      group-hover:translate-x-0.5
      group-hover:-translate-y-0.5
    "

  />


</a>

)}


</div>


</div>


)

)}





{/* QUICK QUESTIONS */}


{messages.length === 1 && !loading && (

<div className="pt-2">


<p

className="
mb-3
text-xs
font-medium
uppercase
tracking-[0.15em]
text-black/35
"

>

Try asking

</p>



<div className="flex flex-wrap gap-2">


{quickQuestions.map(

(question)=>(


<button

  key={question}

  type="button"

  onClick={() =>
    sendMessage(question)
  }

  className="
    cursor-pointer
    rounded-full
    border
    border-black/10
    bg-white
    px-3
    py-2
    text-xs
    text-black/65
    transition
    hover:border-orange-400
    hover:text-black
  "

>

  {question}


</button>


)

)}


</div>


</div>

)}







{/* LOADING */}



{loading && (

<div className="flex justify-start">


<div

className="
flex
items-center
gap-2
rounded-[20px]
rounded-bl-md
bg-white
px-4
py-3
text-sm
text-black/50
shadow-sm
"

>


<LoaderCircle

size={16}

className="animate-spin"

/>


Thinking...


</div>


</div>

)}



<div ref={bottomRef}/>



</div>







{/* INPUT */}



<div

className="
border-t
border-black/10
bg-white
p-4
"

>



<form

onSubmit={handleSubmit}

className="
flex
items-center
gap-2
rounded-[20px]
border
border-black/10
bg-[#fafafa]
p-2
focus-within:border-black/30
"

>



<input

type="text"

value={input}

onChange={(event)=>

setInput(

event.target.value.slice(
0,
1000
)

)

}


placeholder="Tell me about your project..."

className="
h-11
min-w-0
flex-1
bg-transparent
px-3
text-sm
text-black
outline-none
placeholder:text-black/35
"

/>




<button

type="submit"

disabled={
loading ||
!input.trim()
}


className="
flex
h-11
w-11
shrink-0
cursor-pointer
items-center
justify-center
rounded-2xl
bg-black
text-white
transition
hover:scale-105
hover:bg-orange-500
disabled:cursor-not-allowed
disabled:opacity-30
"

>


<Send size={17}/>


</button>



</form>


<a

href={WHATSAPP_URL}

target="_blank"

rel="noopener noreferrer"

className="
  mt-3
  flex
  items-center
  justify-center
  gap-2
  rounded-xl
  border
  border-black/10
  py-2.5
  text-[11px]
  font-medium
  text-black/55
  transition
  hover:border-orange-300
  hover:bg-orange-50
  hover:text-orange-600
"

>

<MessageCircle size={13}/>

Need a quick reply? Chat on WhatsApp


</a>


<p

className="
  mt-2
  text-center
  text-[10px]
  text-black/30
"

>

Infinotech AI assistant

</p>


</div>


</div>

)}





{/* FLOATING BUTTON */}



<button

type="button"

onClick={() =>
setOpen(
(current)=>!current
)
}


className="
fixed
bottom-6
right-4
z-[9999]
flex
cursor-pointer
items-center
gap-3
rounded-full
bg-black
px-5
py-4
text-white
shadow-[0_15px_50px_rgba(0,0,0,0.30)]
transition
hover:-translate-y-1
hover:bg-orange-500
md:right-7
"

aria-label="Open Infinotech AI"

>



{open ? (


<X size={19}/>


) : (



<div className="relative">


<Bot size={19}/>


<span

className="
  absolute
  -right-1
  -top-1
  h-2.5
  w-2.5
  rounded-full
  bg-orange-500
  ring-2
  ring-black
"

/>



</div>


)}




<span className="font-medium">

Infinotech AI

</span>



</button>



</>

);

}