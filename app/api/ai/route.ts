import OpenAI from "openai";
import { NextResponse } from "next/server";


const INFINOTECH_KNOWLEDGE = `

You are Infinotech AI, the official AI project consultant for Infinotech.

ABOUT INFINOTECH

Infinotech is a digital technology company that designs and builds modern digital products, websites, software applications and AI-powered solutions.

SERVICES

- Website Design & Development
- Web Applications
- Mobile Applications
- Custom Software Development
- UI/UX Design
- AI & Automation
- Cloud & DevOps
- Database Solutions
- E-Commerce Solutions
- Digital Marketing
- Cyber Security


TECHNOLOGIES

Frontend:
Next.js, React, Vue, Angular, TypeScript, JavaScript, HTML, CSS, Tailwind CSS

Backend:
Node.js, Express, Laravel, PHP, Python, Django, Flask, .NET, Java Spring Boot

Mobile:
Flutter, React Native, Android, Kotlin, iOS, Swift

Cloud:
AWS, Microsoft Azure, Google Cloud, Vercel, Docker, Kubernetes


AI SOLUTIONS

- AI Assistants
- AI Agents
- Business Automation
- Workflow Automation
- AI Integrations
- Machine Learning Solutions


DESIGN

- Figma
- UI/UX Design
- Wireframes
- Prototypes
- Design Systems


PROJECTS

- OMG Arcade — gaming and entertainment digital experience
- Haya Family Restaurant — restaurant digital experience


YOUR ROLE

Act as a professional digital consultant.

When visitors explain their business idea:

1. Understand their requirements.
2. Recommend the best digital solution.
3. Suggest useful features.
4. Explain business benefits.
5. Encourage them to contact Infinotech.


RULES

- Keep answers clear and professional.
- Do not invent prices.
- Do not invent testimonials.
- Do not invent clients or results.
- Do not promise delivery timelines.
- For pricing questions, explain that pricing depends on project scope.

You are friendly, confident and helpful.

`;



export async function POST(
  request: Request
) {


  try {


    if (!process.env.OPENAI_API_KEY) {

      return NextResponse.json(

        {
          error:
          "OPENAI_API_KEY is missing"
        },

        {
          status:500
        }

      );

    }



    const openai = new OpenAI({

      apiKey:
      process.env.OPENAI_API_KEY

    });



    const body =
    await request.json();



    const messages =
    Array.isArray(body.messages)
    ? body.messages
    : [];



    if(messages.length === 0){

      return NextResponse.json(

        {
          error:
          "No messages received"
        },

        {
          status:400
        }

      );

    }



    const conversation =
    messages
    .slice(-8)
    .map((message:any)=>{

      return `${
        message.role === "assistant"
        ? "Infinotech AI"
        : "Visitor"
      }: ${message.content}`;

    })
    .join("\n\n");




    const response =
    await openai.responses.create({


      model:
      "gpt-5-mini",


      instructions:
      INFINOTECH_KNOWLEDGE,


      input:
      conversation,


      max_output_tokens:
      300


    });




    return NextResponse.json({

      message:
      response.output_text ||

      "Please try again."

    });



  }

  catch(error:any){


    console.error(
      "INFINOTECH AI ERROR:",
      error
    );



    return NextResponse.json(

      {

        error:
        error.message ||

        "AI request failed"

      },

      {

        status:500

      }

    );


  }


}