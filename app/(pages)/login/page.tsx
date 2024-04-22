import DetailHeader from "@/ui/components/detailHeader";
import Logo from "@/ui/components/logo";
import { LoginForm } from "@/ui/login-form";


export default function Page() {
  return (
    <div>
      <DetailHeader title="登录" />
      <div className="w-screen flex flex-col justify-center items-center">
        <Logo />
        <LoginForm />
      </div>
    </div>
  );
}