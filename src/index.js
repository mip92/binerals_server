const express = require('express')
require('dotenv').config()
const cors = require('cors')
const router = require('./routes')
const PORT = process.env.PORT || 4000
const app = express()
const path =require('path')
const fileUpload =require('express-fileupload')
const errorMiddleware=require('./middlwares/error-middleware')

app.use(cors({
    credentials:true,
    origin: process.env.CLIENT_URL
}))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

app.use('/api',router)
app.use(errorMiddleware)

const start = async () => {
    try {
        app.listen(PORT, () => console.log("Server started on port: " + PORT))
    } catch (e) {
        console.log(e)
    }
}
start()
