"use client";
import { NavBar } from "antd-mobile";
import { useRouter } from "next/navigation";

type DetailHeaderProps = {
  title?: string;
};
export default function DetailHeader(props: DetailHeaderProps) {
  const { title } = props;
  const router = useRouter();
  return (
    <NavBar
      back="返回"
      onBack={router.back}
      style={{ borderBottom: "solid 1px #ccc", flexShrink: 0 }}
    >
      {title || ""}
    </NavBar>
  );
}
