import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
        activity-index
        <br />
        <Link href="/activity/1/detail"> go to detail</Link>
    </main>
  );
}
