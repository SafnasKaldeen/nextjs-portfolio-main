import { connect } from "http2";
import connectMongoDB from "../../../libs/mongodb";
import Project from "../../../models/projects";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const projects = await Project.find();
  return NextResponse.json({ projects });
}
