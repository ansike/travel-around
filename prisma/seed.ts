import { PrismaClient } from "@prisma/client";

// 初始化 Prisma Client
const prisma = new PrismaClient();
async function main() {
  const user = await prisma.user.create({
    data: {
      name: "test",
      phone: "2315465456",
    },
  });

  console.log(user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // 关闭 Prisma Client
    await prisma.$disconnect();
  });
