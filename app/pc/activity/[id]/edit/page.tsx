"use client";

import { CreateActivityForm } from "@/ui/components/activity/create-form";

export default function Page({ params }: { params: { id: string } }) {
  console.log(params)
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="">编辑活动</h1>
      <CreateActivityForm id={params.id} />
    </div>
  );
}
