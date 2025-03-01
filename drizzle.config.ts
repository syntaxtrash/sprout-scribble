import type { Config } from "drizzle-kit";

export default {
    schema: "./server/schema.ts",
    out: "./server/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.POSTGRES_DB_URL!,
    },
    verbose: true,
    strict: true
} satisfies Config;