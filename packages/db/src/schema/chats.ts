import { date, pgTable, uuid } from "drizzle-orm/pg-core";

export const chats = pgTable("chats", {
  id: uuid("id").defaultRandom().primaryKey(),
  created_at: date("created_at").defaultNow(),

})
