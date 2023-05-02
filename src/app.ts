import * as dotenv from 'dotenv'
import express, {Express, Request, Response} from "express"
import bodyParser from 'body-parser'
import cors from "cors"

dotenv.config()


const app: Express = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

export default app;
