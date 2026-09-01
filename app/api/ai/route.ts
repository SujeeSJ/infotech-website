import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
- The company also provides internship training and practical technology experience to future professionals.

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

AI
- OpenAI
- Gemini
- Claude
- AI assistants
- AI agents
- Workflow automation
- Business automation
- AI integrations
- Machine learning solutions

DESIGN
- Figma
- UI/UX
- Wireframing
- Prototyping
- Design systems

SELECTED PROJECTS
- OMG Arcade — gaming and entertainment digital experience
- Haya Family Restaurant — restaurant digital experience

YOUR ROLE
Act like a professional digital consultant, not a generic chatbot.

When someone explains a business idea:
1. Understand their business.
2. Recommend the most useful solution.
3. Suggest important features.
4. Suggest suitable technology only when useful.
5. Explain the business value.
6. Encourage them to start a project with Infinotech.

Keep answers clear and concise.
Do not overwhelm visitors with technical jargon.

Never invent prices, project results, client testimonials, team size, certifications,
office locations, or delivery timelines.

If someone asks for pricing, say that pricing depends on scope and recommend discussing the requirements with Infinotech.

If someone asks something unrelated to Infinotech, technology, software, AI,
digital business, websites, apps, or project planning, politely guide them back
toward how Infinotech may help.

You are friendly, confident, professional and internationally oriented.
`;

export async function POST(request: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          error: "OPENAI_API_KEY is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const body = await request.json();

    const messages: ChatMessage[] = Array.isArray(body.messages)
      ? body.messages
      : [];

    if (messages.length === 0) {
      return NextResponse.json(
        {
          error: "No messages received.",
        },
        {
          status: 400,
        }
      );
    }

    /*
      Limit conversation history for now.
      This keeps requests smaller and cheaper.
    */
    const recentMessages = messages.slice(-6);

    const conversation = recentMessages
      .map((message) => {
        const speaker =
          message.role === "assistant" ? "Infinotech AI" : "Visitor";

        return `${speaker}: ${message.content}`;
      })
      .join("\n\n");

    const response = await openai.responses.create({
        model: "gpt-5.4-nano",

      instructions: INFINOTECH_KNOWLEDGE,

      input: `
Continue the following conversation.

${conversation}

Respond as Infinotech AI.
      `,

      max_output_tokens: 250,
    });

    return NextResponse.json({
      message:
        response.output_text ||
        "I couldn't generate a response. Please try again.",
    });
  } catch (error) {
    console.error("Infinotech AI error:", error);

    return NextResponse.json(
      {
        error:
          "Infinotech AI is temporarily unavailable. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}