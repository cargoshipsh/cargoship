import { getMemberships } from "@/lib/memberships";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(`/auth/login`);
  }

  const memberships = await getMemberships();

  if (memberships && memberships.length > 0) {
    const teamId = memberships[0].teamId;
    redirect(`/teams/${teamId}/apis`);
  }

  return <div>Something went wrong...</div>;
}
