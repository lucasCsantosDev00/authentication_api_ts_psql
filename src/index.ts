import AppDataSource from "./database/db.config"
import app from './app'

const PORT = process.env.APP_PORT || 3000

AppDataSource.initialize().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running!")
    })
})
.catch(() => {
    console.log("The connection to the database failed!")
})

