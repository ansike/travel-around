import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    cookies().delete("session");
    return Response.json({ messge: "success" });
  } catch (error: any) {
    return Response.json({ message: error?.message || "server error" });
  }
}
