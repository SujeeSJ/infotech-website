import OpenAI from "openai";
import { NextResponse } from "next/server";

console.log(
  "OPENAI KEY STATUS:",
  process.env.OPENAI_API_KEY
    ? "FOUND"
    : "MISSING"
);

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null;



type ChatMessage = {

  role: "user" | "assistant";

  content: string;

};




const INFINOTECH_KNOWLEDGE = `

You are Infinotech AI, the official AI project consultant for Infinotech.

ABOUT INFINOTECH

- Company name: Infinotech
- Registered under: Apexx Private Limited
- Registered since: 8 December 2020
- Infinotech is a digital technology company focused on modern digital products.
- Infinotech provides practical technology solutions and internship training opportunities.

CORE SERVICES

- Website Design & Development
- Custom Web Applications
- Mobile Application Development
- Custom Software Development
- UI/UX & Product Design
- AI & Automation
- Cloud & DevOps
- Database & Data Solutions
- E-Commerce Solutions
- Digital Marketing
- Cyber Security


WEB TECHNOLOGIES

- Next.js
- React
- Vue
- Angular
- TypeScript
- JavaScript
- HTML
- CSS
- Tailwind CSS
- Bootstrap
- Node.js
- Express
- Laravel
- PHP
- Python
- Django
- Flask
- .NET
- Java / Spring Boot


MOBILE

- Flutter
- React Native
- Android
- Kotlin
- iOS
- Swift


DATABASES

- PostgreSQL
- MySQL
- MongoDB
- Firebase
- Redis
- SQL Server


CLOUD / DEVOPS

- AWS
- Microsoft Azure
- Google Cloud
- Vercel
- Docker
- Kubernetes
- CI/CD


AI SOLUTIONS

- AI Assistants
- AI Agents
- Workflow Automation
- Business Automation
- AI Integrations
- Machine Learning Solutions


DESIGN

- Figma
- UI/UX
- Wireframing
- Prototyping
- Design Systems


SELECTED PROJECTS

- OMG Arcade — gaming and entertainment digital experience
- Haya Family Restaurant — restaurant digital experience


YOUR ROLE

Act like a professional digital consultant, not a generic chatbot.

When someone explains a business idea:

1. Understand their business.
2. Recommend the most useful digital solution.
3. Suggest important features.
4. Suggest technology only when useful.
5. Explain business value.
6. Encourage them to start a project with Infinotech.


RULES

- Keep answers clear and concise.
- Do not overwhelm visitors with technical jargon.
- Never invent prices.
- Never invent client testimonials.
- Never invent project results.
- Never invent certifications, offices or timelines.

If someone asks for pricing:
Explain that pricing depends on project requirements and recommend discussing the project with Infinotech.

If someone asks unrelated questions:
Politely guide them back toward how Infinotech can help.

You are friendly, professional and internationally oriented.

`;





export async function POST(
  request: Request
) {


  try {


    if (!openai) {


      return NextResponse.json(

        {
          error:
          "AI is currently unavailable."
        },

        {
          status:503
        }

      );


    }





    const body =
      await request.json();




    const messages: ChatMessage[] =
      Array.isArray(body.messages)
      ? body.messages
      : [];





    if(messages.length === 0){


      return NextResponse.json(

        {
          error:
          "No messages received."
        },

        {
          status:400
        }

      );


    }





    const recentMessages =
      messages
      .slice(-8)
      .map((message)=>({

        role:
        message.role,

        content:
        message.content
        .slice(0,1000)

      }));







    const response =
      await openai.responses.create({



        model:
        "gpt-5-mini",




        instructions:
        INFINOTECH_KNOWLEDGE,




        input:

        recentMessages.map(
          (message)=>({


            role:
            message.role === "assistant"
            ? "assistant"
            : "user",




            content:[

              {

                type:
                "input_text",


                text:
                message.content

              }

            ]


          })

        ),





        max_output_tokens:
        300,



      });







    return NextResponse.json({


      message:

      response.output_text ||

      "I couldn't generate a response. Please try again."


    });





  }
  catch(error:any){

    console.error(
      "Infinotech AI Error:",
      error
    );
  
  
    return NextResponse.json(
  
      {
        error:
          error?.message ||
          "Unknown OpenAI error"
      },
  
      {
        status:500
      }
  
    );
  
  }


}