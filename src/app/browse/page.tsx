import SearchBar from "./search-bar";
import SearchResult from "./search-result";
import { searchChallengesUseCase } from "@/use-cases/challenges";
import type { ChallengeSearchFilters } from "@/use-cases/types";

interface BrowsePageProps {
  searchParams: ChallengeSearchFilters;
}

export default async function BrowsePage({
  searchParams,
}: BrowsePageProps) {
  const data = await searchChallengesUseCase({
    q: searchParams.q,
    author: searchParams.author,
    tags: searchParams.tags,
    page: searchParams.page,
  });
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl font-medium">Browse maps</h1>
      <SearchBar />
      {data.length > 0 ? (
        <div className="grid grid-cols-2 gap-6">
          {data.map((entry) => (
            <SearchResult key={entry.id} data={entry} />
          ))}
        </div>
      ) : (
        <p className="text-muted">No results found</p>
      )}
    </div>
  );
}
