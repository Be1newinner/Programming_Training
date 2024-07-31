import { Redirect } from "expo-router";

export default function Index() {
  Redirect({ href: "AuthStack/LoginPage" });
}
