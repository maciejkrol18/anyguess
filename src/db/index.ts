import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import * as relations from "./relations";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL as string,
});

export const db = drizzle(pool, {
  schema: { ...schema, ...relations },
});
