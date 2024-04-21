"use client";
import Header from "@/ui/components/header";
import Footer from "@/ui/components/footer";
import { Footer as AntdFooter } from "antd-mobile";
export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-grow flex-col h-full">
      <Header />
      <div className="flex-grow overflow-y-auto">{children}</div>
      <AntdFooter content="@ 2024-2030 cddwlp.cn All rights reserved" />
      <Footer />
    </div>
  );
}
