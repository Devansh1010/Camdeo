

import { inquryEmail } from "@/helper/inquireMail";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {

  try {

    const body = await req.json();

    const {
      username,
      email,
      phone,
      service,
      message,
    } = body;

    if (
      !username ||
      !email ||
      !phone ||
      !service ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }


    const emailRes = await inquryEmail(
      email,
      username,
      phone,
      message,
      service
    );

    if (!emailRes.success) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Email not sent. Please try again later.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully",
      },
      {
        status: 200,
      }
    );

  } catch (error) {

    console.error("ENQUIRY_API_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}