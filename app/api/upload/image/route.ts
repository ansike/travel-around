import fs from "fs";
import { writeFile } from "node:fs/promises";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const { name, type } = file;
    const ext = type.split("/")[1];
    const arrayBuffer = await file.arrayBuffer();
    const data = Buffer.from(arrayBuffer);
    const dir = `public/upload/img/${ext}`;
    const filePath = `${dir}/${name}`;
    if (!fs.existsSync(dir)) {
      await fs.mkdirSync(dir, { recursive: true });
    }
    await writeFile(filePath, data);
    return NextResponse.json({ code: 200, data: filePath }, { status: 200 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { message: "上传失败", code: -1 },
      { status: 400 }
    );
  }
}
