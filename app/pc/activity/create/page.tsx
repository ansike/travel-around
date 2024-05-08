'use client'
import { CreateActivityForm } from "@/ui/components/activity/create-form";
import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";
import { useRouter } from "next/navigation";

const theme: ThemeConfig = {
  token: {
    fontSize: 12,
    size: 12,
  },
};

export default function Page() {
  const router = useRouter();
  return (
    <ConfigProvider theme={theme}>
      <div style={{ width: 700, margin: "auto" }} className="h-full">
        <h1 className="text-center">创建活动</h1>
        <CreateActivityForm
          callback={() => {
            router.back();
          }}
        />
      </div>
    </ConfigProvider>
  );
}
