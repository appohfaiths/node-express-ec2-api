import dotenv from "dotenv";
import express from 'express'
import routes from './routes'

if (process.env.NODE_ENV === "development") {
  dotenv.config();
}

const app = express()
const PORT = process.env.PORT ?? 8080;

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true}))
app.use(express.static("public")) //serve static files from your static folder
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})