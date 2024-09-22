import { Button } from "@/components/ui/button";
import type { challenges, user } from "@/db/schema";
import type { searchChallengesUseCase } from "@/use-cases/challenges";
import { CalendarClock, Play, Tags, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SearchResultProps {
  data: Awaited<ReturnType<typeof searchChallengesUseCase>>[number];
}

const getUserImage = (user: SearchResultProps["data"]["user"]) => {
  if (user?.image) {
    return (
      <Image
        src={user.image}
        alt="Avatar"
        width={20}
        height={20}
        className="rounded-full"
      />
    );
  }
  return <UserCircle className="size-5" />;
};

export default function SearchResult({ data }: SearchResultProps) {
  return (
    <div className="flex bg-card rounded-lg">
      <Image
        src={data.map_image}
        alt={`${data.title} map`}
        width={180}
        height={256}
        className="object-cover rounded-l-lg"
      />
      <div className="flex flex-col gap-4 p-4 grow">
        <p className="text-xl font-semibold">{data.title}</p>
        <div className="flex flex-col gap-2 text-muted text-sm">
          {/* TODO: Challenge ratings, author, times played and amount of landmarks */}
          <div className="flex items-center gap-2">
            {getUserImage(data.user)}
            <p>
              Created by{" "}
              <span className="font-semibold">
                {data.user?.name || "Unknown"}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Tags className="size-5" />
            <p>{data.tags?.join(", ")}</p>
          </div>
          <div className="flex gap-2 items-center">
            <CalendarClock className="size-5" />
            <p>
              Added on{" "}
              {new Date(data.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
        <Button variant={"play"} asChild>
          <Link
            href={`/play/${data.id}`}
            className="bg-primary text-black"
          >
            <Play />
            Play
          </Link>
        </Button>
      </div>
    </div>
  );
}
