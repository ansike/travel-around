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
        <div className="flex text-gray-400 w-full justify-center mt-10">
          List is empty
          {/* <ErrorBlock status="empty" /> */}
        </div>
      )}
    </main>
  );
}
