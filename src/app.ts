import * as dotenv from 'dotenv'

import express, {Request, Response} from "express"
import AppDataSource from "./database/db.config"

dotenv.config()

const port = process.env.APP_PORT
const app = express()

app.use(express.json())

AppDataSource.initialize().then(() => {
    app.listen(port, () => {
        console.log("Server is running!")
    })
})
.catch(() => {
    console.log("The connection to the database failed!")
})

