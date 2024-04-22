import { fetchActivityList } from "@/lib/data";
import ActivityItem from "@/ui/components/activity/list/item";
// import { ErrorBlock } from "antd-mobile";

export default async function Home() {
  const list = await fetchActivityList();
  return (
    <main className="flex flex-col">
      {list.length ? (
        <>
          {list.map((item) => {
            return <ActivityItem key={item.id} item={item}></ActivityItem>;
          })}
        </>
      ) : (
        <>
          List is empty
          {/* <ErrorBlock status="empty" /> */}
        </>
      )}
    </main>
  );
}
