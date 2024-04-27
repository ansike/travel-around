"use client";
import { Activity, Enroll } from "@prisma/client";
import { Image } from "antd-mobile";
import Link from "next/link";
import { DownFill } from "antd-mobile-icons";

type ItemProps = {
  item: Activity & { enroll: Enroll[] };
};
export default function ActivityItem(props: ItemProps) {
  const { item } = props;
  return (
    <div
      style={{
        border: "solid 1px #eee",
        margin: "20px 16px 0",
        borderRadius: 6,
        padding: 10,
      }}
    >
      <Link
        className="flex justify-between  items-center"
        href={`/activity/${item.id}/detail`}
      >
        <Image
          style={{ width: "212px", marginRight: 10 }}
          src={item.cover || "/imgs/845_121546.jpg"}
          alt="img"
        />
        <div className="flex-grow">
          <div>{item.title}</div>
          <div
            style={{
              height: 30,
              display: "flex",
              alignItems: "center",
              color:'black'
            }}
          >
            <DownFill style={{ rotate: "180deg" }} /> &nbsp; 已报名
            {item.enroll.length}人
          </div>
        </div>
      </Link>
    </div>
  );
}
