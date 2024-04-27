import prisma from "@/lib/prisma";
import { decrypt } from "@/lib/session";
import { SessionUser } from "@/types/user";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const data = await req.json();
  const session = cookies().get("session");
  const user = (await decrypt(session?.value)) as SessionUser;

  if (!data.activityId) {
    return Response.json({ message: "activityId is required" });
  }

  try {
    const enroll = await prisma.enroll.findUnique({
      where: {
        id: +data.activityId,
        userId: user.userId,
      },
    });
    if (enroll) {
      return Response.json({ message: `当前用户${user.userId}没有报过名` });
    }

    return Response.json({ errNo: 0, message: "success", data: enroll });
  } catch (error: any) {
    console.log(error);
    return Response.json({
      errNo: 1,
      message: error?.message || "server error",
    });
  }
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const session = cookies().get("session");
  const user = (await decrypt(session?.value)) as SessionUser;

  if (!data.activityId) {
    return Response.json({ message: "activityId is required" });
  }
  if (!data.phone) {
    return Response.json({ message: "phone is required" });
  }

  if (!data.participants?.length) {
    return Response.json({ message: "participants is required" });
  }

  const enroll = await prisma.enroll.findUnique({
    where: {
      activityId_userId: {
        activityId: +data.activityId,
        userId: user.userId,
      },
    },
  });
  if (enroll) {
    return Response.json({ message: `当前用户${user.userId}已经报过名` });
  }
  try {
    const enroll = await prisma.enroll.create({
      data: { ...data, userId: user.userId },
      include: { user: true, activity: true },
    });
    return Response.json({ errorNo: 0, data: enroll });
  } catch (error: any) {
    console.log(error);
    return Response.json({
      errNo: 1,
      message: error?.message || "server error",
    });
  }
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  // const session = cookies().get("session");
  // const user = (await decrypt(session?.value)) as SessionUser;

  if (!data.id) {
    return Response.json({ message: "id is required" });
  }
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
    const enroll = await prisma.enroll.update({
      where: {
        id: +data.id,
      },
      data,
    });
    return Response.json({ errNo: 0, data: enroll });
  } catch (error: any) {
    console.log(error);
    return Response.json({
      errNo: 1,
      message: error?.message || "server error",
    });
  }
}
