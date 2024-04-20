import prisma from "@/lib/prisma";

export async function fetchActivity(id: number) {
  if (!id) {
    return null;
  }

  try {
    const activity = await prisma.activity.findUnique({ where: { id: +id } });
    return activity;
  } catch (error) {
    console.log(error);
  }
  return null
}
