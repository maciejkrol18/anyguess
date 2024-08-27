import { auth } from "@/auth";
import { Button } from "./ui/button";
import Link from "next/link";

export default async function HeaderAuth() {
  const session = await auth();
  if (session) {
    return (
      <Button variant="primary" size="sm" asChild>
        <Link href="/dashboard">{session.user?.name}</Link>
      </Button>
    );
  }
  return (
    <Button variant="primary" size="sm" asChild>
      <Link href="/auth/sign-in">Sign in</Link>
    </Button>
  );
}
