This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<!-- icon https://www.iconfont.cn/search/index?searchType=icon&q=travel&page=7&tag=complex -->

## 使用 prisma

https://www.prisma.io/migrate
https://juejin.cn/post/7153283997060202527#heading-16

1. 安装 Prisma CLI 作为开发依赖项
   ```shell
   yarn add -D prisma
   ```
2. 初始化 Prisma
   ```shell
   npx prisma init
   ```
3. 编写 model
4. 迁移数据库
   每次表结构变动都需要执行一次
   ```shell
   npx prisma migrate dev --name "init"
   ```
5. 插入初始数据
   创建 ./prisma/seed.ts 文件准备插入数据
   ```shell
   yarn add ts-node --dev
   npx ts-node ./prisma/seed.ts
   ```
