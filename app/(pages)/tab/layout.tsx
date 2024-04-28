"use client";
import Header from "@/ui/components/header";
import Footer from "@/ui/components/footer";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-grow flex-col h-full bg-gray-100">
      <Header />
      <div className="flex-grow overflow-y-auto">{children}</div>
      <div className="mt-2 text-center py-2 text-gray-300">@ 2024-2030 cddwlp.cn All rights reserved</div>
      <Footer />
    </div>
  );
}
