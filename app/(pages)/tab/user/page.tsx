import { getUser } from "@/lib/data";
import UserPage from "@/ui/components/user";

export default async function Home() {
  const user = await getUser();

  return <UserPage user={user} />;
}
