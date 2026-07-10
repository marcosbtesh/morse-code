import { pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { chats } from "./chats";
const senderTypeEnum = pgEnum("sender_type", ["AI", "USER"]);

export const chatMessages = pgTable("chat_messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  message: text("message").notNull(),
  chat_id: text("chat_id")
    .notNull()
    .references(() => chats.id, { onDelete: "cascade" }),
  sender: senderTypeEnum("sender"),
});
