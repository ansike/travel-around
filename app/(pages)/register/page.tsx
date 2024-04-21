import DetailHeader from "@/ui/components/detailHeader";
import { SignupForm } from "@/ui/signup-form";

export default function Page() {
  return (
    <div>
      <DetailHeader title="注册" />
      <div>
        <div>logo</div>
        <SignupForm />
      </div>
    </div>
  );
}
