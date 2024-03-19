require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 8080;
const routes = require('./routes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true}))
app.use(express.static("public")) //serve static files from your static folder
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})