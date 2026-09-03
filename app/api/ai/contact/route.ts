import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(
  process.env.RESEND_API_KEY
);



export async function POST(
  request: Request
) {

  try {


    const body = await request.json();


    const {
      name,
      email,
      phone,
      company,
      service,
      budget,
      message

    } = body;



    await resend.emails.send({


      from:
      "Infinotech Website <onboarding@resend.dev>",


      to:
      "info@infinotech.com",


      subject:
      `New Infinotech Inquiry from ${name}`,


      html:

      `

      <h2>New Website Inquiry</h2>

      <p><b>Name:</b> ${name}</p>

      <p><b>Email:</b> ${email}</p>

      <p><b>Phone:</b> ${phone}</p>

      <p><b>Company:</b> ${company}</p>

      <p><b>Service:</b> ${service}</p>

      <p><b>Budget:</b> ${budget}</p>

      <hr/>

      <p><b>Message:</b></p>

      <p>${message}</p>

      `

    });



    return NextResponse.json({

      success:true

    });



  }

  catch(error){


    console.log(error);


    return NextResponse.json(

      {
        success:false
      },

      {
        status:500
      }

    );


  }

}