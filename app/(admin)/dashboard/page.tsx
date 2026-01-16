import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  console.log("DASHBOARD SESSION:", session);

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "ROLE_ADMIN") {
    redirect("/403");
  }

  return <h1>Admin Dashboard</h1>;
}
