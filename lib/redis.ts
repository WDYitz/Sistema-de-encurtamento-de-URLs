require('dotenv').config()
import { createClient } from "redis";

export const redis = createClient({
  url: process.env.DB_REDIS_CON_STRING,
})

redis.connect()