require('dotenv').config()
import postgres from "postgres";

export const sql = postgres(`${process.env.DB_POSTGRES_CON_STRING}`)