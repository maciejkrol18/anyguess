import { auth, signOut } from "@/auth";
import { db } from "@/db";
import { test } from "@/db/schema";
import Link from "next/link";

async function fetchData() {
  const data = await db.select().from(test);
  return data;
}

export default async function Home() {
  const data = await fetchData();

  const session = await auth();

  return (
    <main className="p-4 flex flex-col gap-4">
      <p className="text-xl">
        Xata postgres test. You should see some data below
      </p>
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
      </div>
      <div>
        <p>Data from Xata</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <div>
        <p>Auth data</p>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </main>
  );
}
