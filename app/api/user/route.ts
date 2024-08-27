import { getUser } from "@/lib/data";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  // 如果没有user id 返回当前登录用户
  if (!id) {
    const user  = await getUser();
    return Response.json(user);
  }
  if (!id) {
    return Response.json({ message: "user id is required" });
  }
  const user = await prisma.user.findUnique({ where: { id: +id } });
  return Response.json(user);
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
