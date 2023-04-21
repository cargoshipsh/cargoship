import { getApiKeys } from "@/lib/apiKeys";
import ProfileSettingsPage from "@/app/teams/[teamId]/settings/ProfileSettingsPage";

export default async function SettingsPage({}) {
  const apiKeys = await getApiKeys();
  return <ProfileSettingsPage apiKeys={apiKeys} />;
}
