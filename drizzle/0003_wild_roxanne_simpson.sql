ALTER TABLE "account" ADD COLUMN "xata_updatedat" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "account" ADD COLUMN "xata_id" text DEFAULT 'rec_'::text || (xata_private.xid())::text NOT NULL;--> statement-breakpoint
ALTER TABLE "account" ADD COLUMN "xata_version" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "account" ADD COLUMN "xata_createdat" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "authenticator" ADD COLUMN "xata_updatedat" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "authenticator" ADD COLUMN "xata_id" text DEFAULT 'rec_'::text || (xata_private.xid())::text NOT NULL;--> statement-breakpoint
ALTER TABLE "authenticator" ADD COLUMN "xata_version" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "authenticator" ADD COLUMN "xata_createdat" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "session" ADD COLUMN "xata_updatedat" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "session" ADD COLUMN "xata_id" text DEFAULT 'rec_'::text || (xata_private.xid())::text NOT NULL;--> statement-breakpoint
ALTER TABLE "session" ADD COLUMN "xata_version" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "session" ADD COLUMN "xata_createdat" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "xata_updatedat" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "xata_id" text DEFAULT 'rec_'::text || (xata_private.xid())::text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "xata_version" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "xata_createdat" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "verificationToken" ADD COLUMN "xata_updatedat" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "verificationToken" ADD COLUMN "xata_id" text DEFAULT 'rec_'::text || (xata_private.xid())::text NOT NULL;--> statement-breakpoint
ALTER TABLE "verificationToken" ADD COLUMN "xata_version" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "verificationToken" ADD COLUMN "xata_createdat" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "authenticator" DROP CONSTRAINT authenticator_userId_credentialID_pk;
--> statement-breakpoint
ALTER TABLE "authenticator" ADD CONSTRAINT authenticator_userId_credentialID_pk PRIMARY KEY(credentialID,userId);--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account__pgroll_new_xata_id_key" UNIQUE("xata_id");--> statement-breakpoint
ALTER TABLE "authenticator" ADD CONSTRAINT "authenticator__pgroll_new_xata_id_key" UNIQUE("xata_id");--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session__pgroll_new_xata_id_key" UNIQUE("xata_id");--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user__pgroll_new_xata_id_key" UNIQUE("xata_id");--> statement-breakpoint
ALTER TABLE "verificationToken" ADD CONSTRAINT "verificationToken__pgroll_new_xata_id_key" UNIQUE("xata_id");