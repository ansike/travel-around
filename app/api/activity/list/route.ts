import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const pageSize = searchParams.get("pageSize") || 10;
  const activities = await prisma.activity.findMany({
    include: { enroll: true },
  });
  return Response.json(activities);
}
