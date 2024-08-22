import { auth, signOut } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <main className="p-4 flex flex-col gap-4">
      <div>
        <Link href="/auth/sign-in">Sign in</Link>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Sign out</button>
        </form>
        <Link href="/home">/home</Link>
      </div>
      <div>
        <p>Auth data</p>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </main>
  );
}
