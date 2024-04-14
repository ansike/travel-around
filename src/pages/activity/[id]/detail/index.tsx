import DetailHeader from "@/pages/components/detailHeader";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <DetailHeader />
      deatil
      <br />
      <Link href="/activity"> go back</Link>
    </main>
  );
}
