'use client'
import DetailHeader from "@/ui/components/detailHeader";
import { SignupForm } from "@/ui/signup-form";
import Logo from "@/ui/components/logo";

export default function Page() {
  return (
    <div>
      <DetailHeader title="注册" />
      <div className="w-screen flex flex-col justify-center items-center">
        <Logo />
        <SignupForm />
      </div>
    </div>
  );
}
