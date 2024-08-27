import { Button } from "@/components/ui/button";
import { Compass, Stars } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <section className="flex min-h-[calc(100vh-92px)]">
        <div className="container mx-auto flex flex-col gap-6 items-center justify-center grow">
          <h1 className="text-6xl leading-tight text-center">
            Create <span className="font-bold italic">your own</span>{" "}
            <br />
            geoguessr style
            <br />
            challenges
          </h1>
          <div className="flex gap-4">
            <Button variant="primary" asChild>
              <Link href="/new">
                <Stars /> Start creating
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/browse">
                <Compass /> Browse challenges
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="flex gap-4 mt-4">
        <div className="p-4 bg-card">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Aliquam, quasi laboriosam cumque nostrum numquam molestiae.
        </div>
        <div className="p-4 bg-card">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Aliquam, quasi laboriosam cumque nostrum numquam molestiae.
        </div>
        <div className="p-4 bg-card">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Aliquam, quasi laboriosam cumque nostrum numquam molestiae.
        </div>
      </section>
    </>
  );
}
