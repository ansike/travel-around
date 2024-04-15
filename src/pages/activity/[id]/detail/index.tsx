import Enroll from "@/pages/components/activity/detail/enroll";
import style from "./style.module.css";
import Introduce from "@/pages/components/activity/detail/introduce";

export default function Home() {
  return (
    <main className={`flex flex-col px-5 pt-5 ${style.detail}`}>
      <Introduce />
      <Enroll />
    </main>
  );
}
