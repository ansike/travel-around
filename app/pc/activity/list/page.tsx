import { fetchActivityList } from "@/lib/data";
import ActivityList from "@/ui/pc/activity/list";
import { Button } from "antd";
import Link from "next/link";

export default async function Page() {
  const list = await fetchActivityList();
  return (
    <main
      style={{ width: 1000, margin: "auto", marginTop: 20 }}
      className="flex flex-col "
    >
      <div className="mb-6">
        <Link href="/pc/activity/create">
          <Button type="primary">新建活动</Button>
        </Link>
      </div>
      <ActivityList data={list} />
    </main>
  );
}
