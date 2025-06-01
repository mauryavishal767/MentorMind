import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

function getEnv(key: string): string {
    const val = process.env[key];
    if (!val) throw new Error(`Missing required env var: ${key}`);
    return val;
}

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    host: getEnv('DB_HOST'),
    port: Number(getEnv('DB_PORT')),
    user: getEnv('DB_USER'),
    password: getEnv('DB_PASSWORD'),
    database: getEnv('DB_NAME'),
    ssl:
      getEnv('DB_SSL') === 'true'
        ? { rejectUnauthorized: true }
        : false,
  },
});


