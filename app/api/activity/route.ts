import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  if (!id) {
    return Response.json({ message: "activityId is required" });
  }
  try {
    const activity = await prisma.activity.findUnique({ where: { id: +id } });
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

  try {
    const activity = await prisma.activity.create({ data });
    return Response.json(activity);
  } catch (error: any) {
    return Response.json({ message: error?.message || "server error" });
  }
}
