"use client";
import Image from "next/image";
import style from "./style.module.css";
import { Activity, Enroll } from "@prisma/client";

type IntroduceProps = {
  activity?: (Activity & { enroll: Enroll[] }) | null;
};
export default function Introduce(props: IntroduceProps) {
  const { activity } = props;
  // console.log(detail);
  // const router = useRouter();

  // const handleAnchorClick = (e) => {
  //   const targetLink = e.target.closest("a");
  //   if (!targetLink) return;
  //   e.preventDefault();

  //   console.log(e);
  //   // const redirectThis = fixLink(targetLink.href);

  //   // router.push(`/${redirectThis}`);
  // };

  return (
    <div className="detail">
  
      <div className={style.title}>{activity?.title}</div>
      <div className={`${style.segment} text-red-500`}>
        已报名：{activity?.enroll.length}人
      </div>
      <div className="text-red-500">报名开始时间：2024-04-18 10:00:00</div>
      <div className={`${style.segment} text-red-500`}>
        报名截至时间：2024-04-18 10:00:00
      </div>
      <div
        // onClick={handleAnchorClick}
        // onKeyPress={handleAnchorClick}
        className="richtext"
        dangerouslySetInnerHTML={{ __html: activity?.desc || "" }}
      ></div>
      {/* <div className={style.segment}>
        极光口腔为小朋友提供小小牙医亲子体验活动，让孩子在体验牙医的过程中深刻认识口腔的重要性，消除小朋友对医院的恐惧以及学习如何正确刷牙等口腔知识。活动纯公益，只收保险费。
      </div>
      <div className={style.segment}>
        <Image
          src="/imgs/845.jpg"
          alt="activity img"
          width="400"
          height="800"
        />
      </div>
      <div>
        <span className="font-bold">活动主题：</span>
        <span>
          聚玩公益【第799期】儿童活动：小小牙医职业体验（极光口腔，第四集）；
        </span>
      </div>
      <div>
        <span className="font-bold">时间：</span>{" "}
        <span>2024年4月20日星期六上午10:00～12:00；</span>
      </div>
      <div>
        <span className="font-bold">地点：</span>{" "}
        <span>极光口腔锦江总院（锦江区新光华街7号航天科技大厦6-7层）；</span>
      </div>
      <div>
        <span className="font-bold">集合地点：</span>{" "}
        <span>航天科技大厦6-7层；</span>
      </div>
      <div>
        <span className="font-bold">集合时间：</span>{" "}
        <span>9:45集合签到，10:00开始活动，迟到不候；</span>
      </div>
      <div>
        <span className="font-bold">参与人员：</span>{" "}
        <span>3岁～12岁儿童（需要家长陪同参加）；</span>
      </div>
      <div>
        <span className="font-bold">人数限制：</span> <span>儿童20人；</span>
      </div>
      <div>
        <span className="font-bold">保险费：</span>{" "}
        <span>5.00元/人，只收儿童，积分不能抵用保险费【关于保险】；</span>
      </div>
      <div>
        <span className="font-bold">注：</span>{" "}
        <span>
          随着社会的进步，人们饮食习惯的改变，现今的食物搭配更加偏向营养化、精细化。导致大多孩子存在颌骨锻炼不足、颌骨发育不良等问题；加上孩子可能存在口呼吸、咬笔、吐舌、吸唇等不良习惯的影响，如果家长不及时纠正，孩子就会慢慢就会形成如反颌，开合，龅牙等咬合问题。
        </span>
      </div>
      <div>
        <span className="font-bold">活动环节： </span>{" "}
        <span>
          第一步：小小牙医面试；
          <br />
          第二步：学习正确刷牙；
          <br />
          第三步：学习口腔知识；
          <br />
          第四步：认识医疗器材；
          <br />
          第五步：模拟牙医检查；
          <br />
          第六步：小小牙医结业典礼。
        </span>
      </div>
      <div>
        <span className="font-bold"> 活动意义：</span>
        <br />
        <span>
          <span className="text-red-500">家长：</span>
          学习到日常口腔保健知识，甚至可以在生活中给自己的家人做简单的牙齿健康问题判断。
          <br />
          <span className="text-red-500">孩子： </span>
          <ul>
            <li>·增加孩子与家长之间的情感交流； </li>
            <li>
              ·学习到牙科医院的设置，消除对小朋友对医院的恐惧以及了解口腔卫生的重要性；{" "}
            </li>
            <li>·认识到付出与回报之间的关系，锻炼孩子的社会参与性与互动性；</li>
            <li>
              ·95%的孩子在经历过活动后自己主动要求刷牙，并且不再惧怕口腔检查。{" "}
            </li>
          </ul>
        </span>
      </div>
      <div className={`${style.segment} text-red-500`}>
        本次活动由极光口腔提供支持！
      </div>
      <div className={style.segment}>
        <Image
          src="/imgs/845_121610.jpg"
          alt="activity1 img"
          width="400"
          height="800"
        />
      </div>
      <div className={style.segment}>
        <Image
          src="/imgs/845_121546.jpg"
          alt="activity2 img"
          width="400"
          height="800"
        />
      </div>
      <div className={style.segment}>
        <Image
          src="/imgs/20240414-222744.jpg"
          alt="activity2 img"
          width="400"
          height="800"
        />
      </div> */}
    </div>
  );
}
