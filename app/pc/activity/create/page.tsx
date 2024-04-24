import { CreateActivityForm } from "@/ui/components/activity/create-form";
import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 12,
    // colorPrimary: "#52c41a",
    size: 12,
  },
};

export default function Page() {
  return (
    <ConfigProvider theme={theme}>
      <div className="w-full h-full flex flex-col items-center" >
        <h1 className="">创建活动</h1>
        <CreateActivityForm />
      </div>
    </ConfigProvider>
  );
}
