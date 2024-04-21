import { fetchActivityList } from "@/lib/data";
import ActivityItem from "@/ui/components/activity/list/item";

export default async function Home() {
  const list = await fetchActivityList();
  return (
    <main className="flex flex-col">
      {list.map((item) => {
        return <ActivityItem key={item.id} item={item}></ActivityItem>;
      })}
    </main>
  );
}
