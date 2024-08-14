import { auth } from "@/auth";

export default async function HomePage() {
  const session = await auth();
  return (
    <div>
      Protected page
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
