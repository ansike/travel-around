'use client'

import Introduce from "@/ui/components/activity/detail/introduce";
import EnrollForm from "@/ui/components/activity/detail/enrollForm";
import style from "./style.module.css";

export default function Home() {
  return (
    <main className={`flex flex-col px-5 pt-5 pb-20 ${style.detail}`}>
      <Introduce />
      <EnrollForm />
    </main>
  );
}
