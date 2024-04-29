"use client";
import Image from "next/image";
import style from "./style.module.css";
import { Activity, Enroll } from "@prisma/client";
import dayjs from "dayjs";

type IntroduceProps = {
  activity?: (Activity & { enroll: Enroll[] }) | null;
};
export default function Introduce(props: IntroduceProps) {
  const { activity } = props;

  console.log(activity?.enroll);
  const participatns = (activity?.enroll || []).reduce((prev, cur) => {
    prev.push(...cur.participants as any);
    return prev;
  }, [] as any);
  return (
    <div className="detail mb-10">
      <div className={style.title}>{activity?.title}</div>
      <div className={`${style.segment} text-red-500`}>
        已报名：{participatns.length}人
      </div>
      <div className="text-red-500">
        报名开始时间：
        {dayjs(activity?.enrollStartTime).format("YYYY-MM-DD HH:mm:ss")}
      </div>
      <div className={`${style.segment} text-red-500`}>
        报名截至时间：
        {dayjs(activity?.enrollEndTime).format("YYYY-MM-DD HH:mm:ss")}
      </div>
      <div className={style.segment}>
        <Image
          src={activity?.cover || "/imgs/845.jpg"}
          alt="activity img"
          width="400"
          height="800"
        />
      </div>
      <div
        // onClick={handleAnchorClick}
        // onKeyPress={handleAnchorClick}
        className="richtext"
        dangerouslySetInnerHTML={{ __html: activity?.desc || "" }}
      ></div>
    </div>
  );
}
