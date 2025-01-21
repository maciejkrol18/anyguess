import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function NewChallengePage() {
  const session = await auth();
  if (!session) redirect("/auth/sign-in");

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl font-medium font-heading">
        Create a new challenge
      </h1>
    </div>
  );
}
