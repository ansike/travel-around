import fs from "fs";
import { writeFile } from "node:fs/promises";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const ext = file.type.split("/")[1];
    const name = new Date().getTime() + "." + ext;
    const arrayBuffer = await file.arrayBuffer();
    const data = Buffer.from(arrayBuffer);
    const dir = `public/upload/img`;
    const filePath = `${dir}/${name}`;
    if (!fs.existsSync(dir)) {
      await fs.mkdirSync(dir, { recursive: true });
    }
    await writeFile(filePath, data);
    return NextResponse.json(
      { errno: 0, data: { url: `/upload/img/${name}` } },
      { status: 200 }
    );
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { message: "上传失败", errno: 1 },
      { status: 400 }
    );
  }
}
