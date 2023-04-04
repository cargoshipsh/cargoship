"use client";

import { useMemberships } from "@/lib/memberships";
import LayoutApp from "components/layout/LayoutApp";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function ProjectsPage() {
  const { data: session, status } = useSession();
  const { memberships, isErrorMemberships } = useMemberships();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") {
      return;
    }
    if (session && memberships && memberships.length > 0) {
      const teamId = memberships[0].teamId;
      router.push(`/teams/${teamId}/apis`);
    }
    if (!session) {
      router.push(`/auth/signin?callbackUrl=${encodeURIComponent(window.location.href)}`);
    }
  }, [memberships, router, session, status]);

  if (isErrorMemberships) {
    return <div>Something went wrong...</div>;
  }
  return (
    <LayoutApp>
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    </LayoutApp>
  );
}
