import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "./Navbar";

export default async function LayoutApp({ children, params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(`/auth/login`);
  }

  return (
    <div>
      <Navbar session={session} teamId={params.teamId} />
      {children}
    </div>
  );
}
