import DetailHeader from "@/ui/components/detailHeader";
import Logo from "@/ui/components/logo";
import { LoginForm } from "@/ui/login-form";

export default function Page({
  searchParams,
}: {
  searchParams: { redirect?: string };
}) {
  return (
    <div>
      <DetailHeader title="登录" />
      <div className="w-screen flex flex-col justify-center items-center">
        <Logo />
        <LoginForm redirect={searchParams.redirect} />
      </div>
    </div>
  );
}
