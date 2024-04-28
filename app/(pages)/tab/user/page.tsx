import { getUser } from "@/lib/data";
import UserPage from "@/ui/components/user";

export default async function User() {
  const user = await getUser();
  
  return <UserPage user={user} />;
}
