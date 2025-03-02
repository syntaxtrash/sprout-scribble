import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '@/server/schema'

export const db = drizzle(process.env.POSTGRES_DB_URL!, { schema, logger: true, casing: 'snake_case' });