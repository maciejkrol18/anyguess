import { db } from "@/db";
import { challenges } from "@/db/schema";

async function fetchChallenges() {
  const data = await db.select().from(challenges);
  return data;
}

export default async function BrowsePage() {
  const data = await fetchChallenges();
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl font-medium">Browse challenges</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
