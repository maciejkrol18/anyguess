import { searchChallenges } from "@/data-access/challenges";
import type { ChallengeSearchFilters } from "./types";

export async function searchChallengesUseCase({
  q,
  author,
  tags,
  page,
}: ChallengeSearchFilters) {
  const data = await searchChallenges({ q, author, tags, page });
  return data;
}
