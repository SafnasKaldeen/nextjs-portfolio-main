import connectMongoDB from "../../../libs/mongodb";

import Contact from "../../../models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { fullname, email, subject, message } = await req.json();
  console.log(fullname, email, subject, message);
  try {
    await connectMongoDB();
    await Contact.create({ fullname, email, subject, message });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }

   // return NextResponse.json({ msg: ["Unable to send message."] });
  }
}
