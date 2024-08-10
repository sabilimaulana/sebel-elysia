import { Elysia, t } from "elysia"

import { s } from "./libs/db/schemas"
import { getGreets } from "./services/greets"
import { setup } from "./setup"

const app = new Elysia()
  .use(setup)
  .get("/", () => "Sebel Elysia")
  .get("/api/v1/greets", async () => {
    return await getGreets.execute()
  })
  .post(
    "/api/v1/greets",
    async ({ body, db }) => {
      return await db
        .insert(s.greets)
        .values({ message: body.message })
        .returning()
    },
    {
      body: t.Object({
        message: t.String(),
      }),
    }
  )
  .listen(8000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

// curl -d '{"message":"Halo Dunia"}' -H "Content-Type: application/json" -X POST http://localhost:8000/api/v1/greets
