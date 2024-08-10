import { bigserial, pgTable, text, timestamp } from "drizzle-orm/pg-core"

export const greets = pgTable("greets", {
  id: bigserial("id", { mode: "number" }).primaryKey(),

  message: text("message").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
})
