import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  if (!id) {
    return Response.json({ message: "activityId is required" });
  }
  try {
    const activity = await prisma.activity.findUnique({
      where: { id: +id },
      include: { enroll: true },
    });
    return Response.json(activity);
  } catch (error: any) {
    return Response.json({ message: error?.message || "server error" });
  }
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  if (!data.title) {
    return Response.json({ message: "title is required" });
  }
  if (!data.location) {
    return Response.json({ message: "location is required" });
  }
  if (!data.activityStartTime) {
    return Response.json({ message: "activityStartTime is required" });
  }
  if (!data.activityEndTime) {
    return Response.json({ message: "activityEndTime is required" });
  }

  // TODO 报名时间必须早于活动时间

  try {
    const activity = await prisma.activity.create({ data });
    return Response.json(activity);
  } catch (error: any) {
    return Response.json({ message: error?.message || "server error" });
  }
}

export async function PUT(req: NextRequest) {
  const data = await req.json();

  if (!data.id) {
    return Response.json({ message: "activity id is required" });
  }
  if (!data.title) {
    return Response.json({ message: "title is required" });
  }
  if (!data.location) {
    return Response.json({ message: "location is required" });
  }
  if (!data.activityStartTime) {
    return Response.json({ message: "activityStartTime is required" });
  }
  if (!data.activityEndTime) {
    return Response.json({ message: "activityEndTime is required" });
  }

  // TODO 报名时间必须早于活动时间

  try {
    const activity = await prisma.activity.update({
      data,
      where: { id: +data.id },
    });
    return Response.json(activity);
  } catch (error: any) {
    console.log(error)
    return Response.json({ message: error?.message || "server error" });
  }
}
