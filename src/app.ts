import * as dotenv from 'dotenv'

import express, {Request, Response} from "express"
import AppDataSource from "./database/db.config"

const app = express()

app.use(express.json())

AppDataSource.initialize().then(() => {
    app.listen(3000, () => {
        console.log("Server is running!")
    })
})
.catch(() => {
    console.log("The connection to the database failed!")
})

