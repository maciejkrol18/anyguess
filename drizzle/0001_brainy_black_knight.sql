ALTER TABLE "test" ADD COLUMN "xata_updatedat" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "test" ADD COLUMN "xata_id" text DEFAULT 'rec_'::text || (xata_private.xid())::text NOT NULL;--> statement-breakpoint
ALTER TABLE "test" ADD COLUMN "xata_version" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "test" ADD COLUMN "xata_createdat" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "test" ADD CONSTRAINT "test__pgroll_new_xata_id_key" UNIQUE("xata_id");