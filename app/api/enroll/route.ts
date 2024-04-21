import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);

  if (!data.activityId) {
    return Response.json({ message: "activityId is required" });
  }
  if (!data.phone) {
    return Response.json({ message: "phone is required" });
  }

  if (!data.participants?.length) {
    return Response.json({ message: "participants is required" });
  }

  try {
    const enroll = await prisma.enroll.create({
      data,
      include: { user: true, activity: true },
    });
    return Response.json(enroll);
  } catch (error: any) {
    return Response.json({ message: error?.message || "server error" });
  }
}
