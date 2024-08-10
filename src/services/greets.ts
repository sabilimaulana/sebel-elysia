import { desc } from "drizzle-orm"

import { db } from "../libs/db"
import { s } from "../libs/db/schemas"

export const getGreets = db
  .select({ message: s.greets.message })
  .from(s.greets)
  .orderBy(desc(s.greets.id))
  .prepare("prepared_greets")
