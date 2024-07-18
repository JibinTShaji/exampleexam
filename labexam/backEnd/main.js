import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mainRouter from "./router.js"
import { MongoDB } from "./connection.js";
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use("/",mainRouter)
MongoDB()
app.listen(2200)