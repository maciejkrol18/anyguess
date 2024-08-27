import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/auth/sign-in");
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl font-medium">Dashboard</h1>
      <p>You are signed in as {session.user?.name}</p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit" variant={"primary"}>
          Sign out
        </Button>
      </form>
    </div>
  );
}
