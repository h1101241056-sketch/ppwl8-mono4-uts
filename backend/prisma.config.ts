import { defineConfig } from '@prisma/config';

export default defineConfig({
  datasource: {
    // Kita tambahkan nilai default di sini agar tidak error "Cannot resolve"
    url: process.env.DATABASE_URL || "file:./dev.db",
  },
});