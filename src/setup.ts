import Elysia from "elysia"
import cors from "@elysiajs/cors"

import { logger } from "@bogeychan/elysia-logger"

import { db } from "./libs/db"

export const setup = new Elysia()
  .use(
    logger({
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
        },
      },
    })
  )
  .use(cors())
  .decorate("db", db)
