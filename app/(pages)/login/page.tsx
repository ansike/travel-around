import DetailHeader from "@/ui/components/detailHeader";
import { LoginForm } from "@/ui/login-form";

export default function Page() {
  return (
    <div>
      <DetailHeader title="登录" />
      <div>
        <div>logo</div>
        <LoginForm />
      </div>
    </div>
  );
}
