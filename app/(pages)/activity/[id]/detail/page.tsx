import Introduce from "@/ui/components/activity/detail/introduce";
import EnrollForm from "@/ui/components/activity/detail/enrollForm";
import { Metadata } from "next";
import { fetchActivityAndCurUser } from "@/lib/data";
import DetailHeader from "@/ui/components/detailHeader";
import Copyright from "@/ui/components/copyright";

export const metadata: Metadata = {
  title: "活动详情",
};

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchActivityAndCurUser(+params.id);
  console.log(data);
  return (
    <main className="flex flex-col h-screen">
      <DetailHeader />
      <div className="flex flex-col px-5 pt-5 pb-2 flex-grow-1 overflow-y-auto">
        <Introduce activity={data?.activity} />
        <EnrollForm activityId={+params.id} enroll={data?.enroll} />
        <Copyright />
      </div>
    </main>
  );
}
