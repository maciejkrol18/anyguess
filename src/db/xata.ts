import { buildClient, getDeployPreviewBranch } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "account",
    checkConstraints: {
      account_xata_id_length_xata_id: {
        name: "account_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      account_userId_user_id_fk: {
        name: "account_userId_user_id_fk",
        columns: ["userId"],
        referencedTable: "user",
        referencedColumns: ["id"],
        onDelete: "CASCADE",
      },
    },
    primaryKey: ["provider", "providerAccountId"],
    uniqueConstraints: {
      account__pgroll_new_xata_id_key: {
        name: "account__pgroll_new_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "access_token",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "expires_at",
        type: "int",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "id_token",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "provider",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "providerAccountId",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "refresh_token",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "scope",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "session_state",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "token_type",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "type",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "userId",
        type: "link",
        link: { table: "user" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "authenticator",
    checkConstraints: {
      authenticator_xata_id_length_xata_id: {
        name: "authenticator_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      authenticator_userId_user_id_fk: {
        name: "authenticator_userId_user_id_fk",
        columns: ["userId"],
        referencedTable: "user",
        referencedColumns: ["id"],
        onDelete: "CASCADE",
      },
    },
    primaryKey: ["credentialID", "userId"],
    uniqueConstraints: {
      authenticator__pgroll_new_xata_id_key: {
        name: "authenticator__pgroll_new_xata_id_key",
        columns: ["xata_id"],
      },
      authenticator_credentialID_unique: {
        name: "authenticator_credentialID_unique",
        columns: ["credentialID"],
      },
    },
    columns: [
      {
        name: "counter",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "credentialBackedUp",
        type: "bool",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "credentialDeviceType",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "credentialID",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "credentialPublicKey",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "providerAccountId",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "transports",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "userId",
        type: "link",
        link: { table: "user" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "session",
    checkConstraints: {
      session_xata_id_length_xata_id: {
        name: "session_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {
      session_userId_user_id_fk: {
        name: "session_userId_user_id_fk",
        columns: ["userId"],
        referencedTable: "user",
        referencedColumns: ["id"],
        onDelete: "CASCADE",
      },
    },
    primaryKey: ["sessionToken"],
    uniqueConstraints: {
      session__pgroll_new_xata_id_key: {
        name: "session__pgroll_new_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "expires",
        type: "timestamp without time zone",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "sessionToken",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "userId",
        type: "link",
        link: { table: "user" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "user",
    checkConstraints: {
      user_xata_id_length_xata_id: {
        name: "user_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {},
    primaryKey: ["id"],
    uniqueConstraints: {
      user__pgroll_new_xata_id_key: {
        name: "user__pgroll_new_xata_id_key",
        columns: ["xata_id"],
      },
      user_email_unique: {
        name: "user_email_unique",
        columns: ["email"],
      },
    },
    columns: [
      {
        name: "email",
        type: "text",
        notNull: false,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "emailVerified",
        type: "timestamp without time zone",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "image",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "name",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "verificationToken",
    checkConstraints: {
      verificationToken_xata_id_length_xata_id: {
        name: "verificationToken_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {},
    primaryKey: ["identifier", "token"],
    uniqueConstraints: {
      verificationToken__pgroll_new_xata_id_key: {
        name: "verificationToken__pgroll_new_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "expires",
        type: "timestamp without time zone",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "identifier",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "token",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Account = InferredTypes["account"];
export type AccountRecord = Account & XataRecord;

export type Authenticator = InferredTypes["authenticator"];
export type AuthenticatorRecord = Authenticator & XataRecord;

export type Session = InferredTypes["session"];
export type SessionRecord = Session & XataRecord;

export type User = InferredTypes["user"];
export type UserRecord = User & XataRecord;

export type VerificationToken = InferredTypes["verificationToken"];
export type VerificationTokenRecord = VerificationToken & XataRecord;

export type DatabaseSchema = {
  account: AccountRecord;
  authenticator: AuthenticatorRecord;
  session: SessionRecord;
  user: UserRecord;
  verificationToken: VerificationTokenRecord;
};

const DatabaseClient = buildClient();

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super(
      {
        apiKey: process.env.XATA_API_KEY,
        databaseURL: process.env.XATA_HTTP_URL,
        // Use deploy preview branch if available, otherwise use branch from environment
        branch:
          getDeployPreviewBranch(process.env) ??
          process.env.XATA_BRANCH ??
          "main",
        ...options,
      },
      tables,
    );
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
