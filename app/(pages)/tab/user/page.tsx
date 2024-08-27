"use client";

import UserPage from "@/ui/components/user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function User() {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(()=>{
    (async ()=>{
      const res = await fetch(`/api/user`);
      const user = await res.json();
      if(!user){
        router.replace('/login')
      }
      setUser(user);
    })()
  },[])
  return <UserPage user={user} />;
}
