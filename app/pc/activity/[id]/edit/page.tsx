"use client";

import { CreateActivityForm } from "@/ui/components/activity/create-form";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="">编辑活动</h1>
      <CreateActivityForm id={params.id} callback={()=>{
        router.back()
      }} />
    </div>
  );
}
