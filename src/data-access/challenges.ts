import { db } from "@/db";
import { challenges } from "@/db/schema";
import type { ChallengeSearchFilters } from "@/use-cases/types";
import { and, eq, ilike, arrayContains, desc } from "drizzle-orm";

export async function searchChallenges({
  q,
  author,
  tags,
  page,
}: ChallengeSearchFilters) {
  const RESULTS_PER_PAGE = 10;

  const filters = and(
    eq(challenges.is_public, true),
    q ? ilike(challenges.title, `%${q}%`) : undefined,
    author ? eq(challenges.author, author) : undefined,
    tags
      ? arrayContains(challenges.tags, tags.split(","))
      : undefined,
  );

  const data = await db.query.challenges.findMany({
    with: {
      user: true,
    },
    where: filters,
    limit: RESULTS_PER_PAGE,
    offset: ((page || 1) - 1) * RESULTS_PER_PAGE,
    orderBy: [desc(challenges.created_at)],
  });

  return data;
}
