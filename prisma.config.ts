import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // You must use process.env here to pull from your Vercel variables
    url: process.env.DATABASE_URL,
  },
});