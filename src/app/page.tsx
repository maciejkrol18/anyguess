import { db } from "@/db";
import { test } from "@/db/schema";

async function fetchData() {
  const data = await db.select().from(test);
  return data;
}

export default async function Home() {
  const data = await fetchData();
  return (
    <main className="p-4">
      <p className="text-xl">
        Xata postgres test. You should see some data below
      </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
