import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { decrypt } from "./session";
import { SessionUser } from "@/types/user";

export async function fetchActivity(id: number) {
  if (!id) {
    return null;
  }

  try {
    const activity = await prisma.activity.findUnique({
      where: { id: +id },
      include: { enroll: true },
    });
    return activity;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export async function fetchActivityAndCurUser(id: number) {
  if (!id) {
    return null;
  }
  const session = cookies().get("session");
  const user = (await decrypt(session?.value)) as SessionUser;
  try {
    const activity = await prisma.activity.findUnique({
      where: { id: +id },
      include: { enroll: true },
    });
    const enroll = await prisma.enroll.findFirst({
      where: { activityId: +id, userId: user.userId },
    });
    return {
      activity,
      enroll,
    };
  } catch (error) {
    console.log(error);
  }
  return null;
}

export async function fetchActivityList() {
  try {
    const activityList = await prisma.activity.findMany({
      include: { enroll: true },
      orderBy: {
        updatedAt: "desc",
      },
    });
    return activityList;
  } catch (error) {
    console.log(error);
  }
  return [];
}

export async function createEnroll(data: any) {
  try {
    const enroll = await prisma.enroll.create({
      data: data,
      include: {
        activity: true,
      },
    });
    return enroll;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export async function getUser() {
  try {
    const session = cookies().get("session");
    if (session) {
      const sessionUser = await decrypt(session.value);
      const user = await prisma.user.findUnique({
        where: {
          id: +(sessionUser as any)?.userId,
        },
      });
      return user;
    }else{
      return null
    }
  } catch (error) {
    console.log(error);
    return null
  }
}
