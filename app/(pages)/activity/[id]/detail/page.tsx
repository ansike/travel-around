import Introduce from "@/ui/components/activity/detail/introduce";
import EnrollForm from "@/ui/components/activity/detail/enrollForm";
import { Metadata } from "next";
import { fetchActivityAndCurUser } from "@/lib/data";
import DetailHeader from "@/ui/components/detailHeader";
import Copyright from "@/ui/components/copyright";
import { Activity } from "@prisma/client";
import { SessionUser } from "@/types/user";

export const metadata: Metadata = {
  title: "活动详情",
};

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchActivityAndCurUser(+params.id);
  return (
    <main className="flex flex-col h-screen">
      <DetailHeader />
      <div className="flex flex-col px-5 pt-5 pb-2 flex-grow-1 overflow-y-auto">
        <Introduce activity={data?.activity} />
        <EnrollForm
          activity={data?.activity as Activity}
          enroll={data?.enroll}
          user={data?.user as SessionUser}
        />
        <Copyright />
      </div>
    </main>
  );
}
