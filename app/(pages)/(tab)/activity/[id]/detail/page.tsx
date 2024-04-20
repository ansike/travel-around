import Introduce from "@/ui/components/activity/detail/introduce";
import EnrollForm from "@/ui/components/activity/detail/enrollForm";
import style from "./style.module.css";
import { Metadata } from "next";
import { fetchActivity } from "@/lib/data";



export const metadata: Metadata = {
  title: '活动详情',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    id?: string;
  };
}) {
  const data = await fetchActivity(2)
  
  console.log(data)
  return (
    <main className={`flex flex-col px-5 pt-5 pb-20 ${style.detail}`}>
      <Introduce detail={data?.desc} title={data?.title} />
      <EnrollForm />
    </main>
  );
}
