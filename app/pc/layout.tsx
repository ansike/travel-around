import "@/global.css";
import { ConfigProvider, ThemeConfig } from "antd";
// import "./layout.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | 首页",
    default: "周边玩",
  },
};
const theme: ThemeConfig = {
  token: {
    fontSize: 12,
    // colorPrimary: "#52c41a",
    size: 12,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ConfigProvider theme={theme}>
  <div className="h5 h-full w-full">{children}</div>;
</ConfigProvider>
}
