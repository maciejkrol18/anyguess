import { auth } from "@/auth";
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
    <main className="p-4">
      <p className="text-xl">
        Xata postgres test. You should see some data below
      </p>
      <Link href="/auth/sign-in">Sign in</Link>
      <p>Data from Xata</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p>Auth data</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  );
}
