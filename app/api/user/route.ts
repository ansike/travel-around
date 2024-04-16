import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  if (!id) {
    return Response.json({ message: "user id is required" });
  }
  const users = await prisma.user.findUnique({ where: { id: +id } });
  return Response.json(users);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);
  if (!data.phone) {
    return Response.json({ message: "phone is required" });
  }

  try {
    const user = await prisma.user.create({ data });
    return Response.json(user);
  } catch (error: any) {
    return Response.json({ message: error?.message || "server error" });
  }
}
