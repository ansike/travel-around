import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { decrypt } from "./session";

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

export async function fetchActivityList() {
  try {
    const activityList = await prisma.activity.findMany({
      include: { enroll: true },
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
    }
  } catch (error) {
    console.log(error);
  }
}
