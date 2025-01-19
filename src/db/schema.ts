import {
  pgTable,
  unique,
  text,
  integer,
  timestamp,
  primaryKey,
  boolean,
  doublePrecision,
  uuid,
} from "drizzle-orm/pg-core";

export const challenges = pgTable(
  "challenges",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updated_at: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    author: text("author").references(() => user.id, {
      onDelete: "cascade",
    }),
    title: text("title").notNull(),
    tags: text("tags").array(),
    map_image: text("map_image").notNull(),
    is_public: boolean("is_public").default(true),
  },
  (table) => {
    return {
      challenges_title_unique: unique("challenges_title_unique").on(
        table.title,
      ),
    };
  },
);

export const landmarks = pgTable(
  "landmarks",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updated_at: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    title: text("title").notNull(),
    type: integer("type").default(0).notNull(),
    lat: doublePrecision("lat").notNull(),
    lng: doublePrecision("lng").notNull(),
    image: text("image").notNull(),
  },
  (table) => {
    return {
      landmarks_title_unique: unique("landmarks_title_unique").on(
        table.title,
      ),
    };
  },
);

export const session = pgTable(
  "session",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    sessionToken: text("sessionToken").notNull(),
    userId: text("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "string" }).notNull(),
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updated_at: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => {
    return {
      session_token_unique: unique("session_token_unique").on(
        table.sessionToken,
      ),
    };
  },
);

export const user = pgTable(
  "user",
  {
    id: text("id").primaryKey().notNull(),
    name: text("name"),
    email: text("email"),
    emailVerified: timestamp("emailVerified", { mode: "string" }),
    image: text("image"),
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updated_at: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => {
    return {
      user_email_unique: unique("user_email_unique").on(table.email),
    };
  },
);

export const verificationToken = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "string" }).notNull(),
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updated_at: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => {
    return {
      verificationToken_identifier_token_pk: primaryKey({
        columns: [table.identifier, table.token],
        name: "verificationToken_identifier_token_pk",
      }),
    };
  },
);

export const authenticator = pgTable(
  "authenticator",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    credentialID: text("credentialID").notNull(),
    userId: text("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: boolean("credentialBackedUp").notNull(),
    transports: text("transports"),
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updated_at: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => {
    return {
      authenticator_credentialID_unique: unique(
        "authenticator_credentialID_unique",
      ).on(table.credentialID),
    };
  },
);

export const account = pgTable(
  "account",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    userId: text("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    type: text("type").notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updated_at: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => {
    return {
      account_provider_providerAccountId_unique: unique(
        "account_provider_providerAccountId_unique",
      ).on(table.provider, table.providerAccountId),
    };
  },
);
