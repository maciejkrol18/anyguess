import {
  pgTable,
  unique,
  text,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const test = pgTable(
  "test",
  {
    foo: text("foo"),
    bar: integer("bar"),
    xata_updatedat: timestamp("xata_updatedat", {
      withTimezone: true,
      mode: "string",
    })
      .defaultNow()
      .notNull(),
    xata_id: text("xata_id")
      .default(sql`'rec_'::text || (xata_private.xid())::text`)
      .notNull(),
    xata_version: integer("xata_version").default(0).notNull(),
    xata_createdat: timestamp("xata_createdat", {
      withTimezone: true,
      mode: "string",
    })
      .defaultNow()
      .notNull(),
  },
  (table) => {
    return {
      test__pgroll_new_xata_id_key: unique(
        "test__pgroll_new_xata_id_key",
      ).on(table.xata_id),
    };
  },
);
