// import dotenv from 'dotenv'
import 'dotenv/config'
import express from 'express'
import { router } from './routes'
// dotenv.config()

const app = express()

app.use(express.json())
app.use(router)

export { app }
