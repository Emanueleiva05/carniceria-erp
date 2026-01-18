import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
  host: Bun.env.DATABASE_HOST,
  user: Bun.env.DATABASE_USER,
  password: Bun.env.DATABASE_PASSWORD,
  database: Bun.env.DATABASE_NAME,
  port: 3306,
  connectionLimit: 5,
});

export const prisma = new PrismaClient({ adapter });
