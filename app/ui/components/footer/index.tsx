"use client";
import { TabBar } from "antd-mobile";
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { usePathname, useRouter } from "next/navigation";

const tabs = [
  {
    key: "/tab/home",
    title: "首页",
    icon: <AppOutline />,
  },
  {
    key: "/tab/activity",
    title: "活动",
    icon: <UnorderedListOutline />,
  },
  {
    key: "/tab/user",
    title: "我的",
    icon: <UserOutline />,
  },
];

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <TabBar
      style={{ borderTop: "solid 1px #ccc", background:'white' }}
      safeArea
      activeKey={pathname}
      onChange={(val) => {
        router.push(val);
      }}
    >
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
}
