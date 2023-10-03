import { connect } from "http2";
import connectMongoDB from "../../../libs/mongodb";
import Project from "../../../models/projects";
import { NextRequest, NextResponse } from "next/server";

// export async function POST(request) {
//   const { title, description } = await request.json();
//   await connectMongoDB();
//   await Project.find({ title, description });
//   return NextResponse.json({ message: "Project show" }, { status: 201 });
// }

export async function GET() {
  await connectMongoDB();
  const projects = await Project.find();
  return NextResponse.json({ projects });
}
