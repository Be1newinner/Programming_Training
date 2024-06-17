import { Link, Redirect } from "expo-router";

export default function Root() {
  const user = "";

  if (!user) {
    return <Redirect href="/tabs" />;
  }
  return <Link href="/tabs/explore">Navigate to nested route</Link>;
}
  