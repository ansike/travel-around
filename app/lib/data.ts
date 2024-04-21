import prisma from "@/lib/prisma";

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
