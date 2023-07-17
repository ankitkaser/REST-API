const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const product_routes = require('./routes/productRoutes')
require('dotenv').config()
const PORT = process.env.PORT || 5000




app.get('/', (req,res) => {
    res.send("Hi, I am live")
})

// middileware or to set router path

app.use('/api/products', product_routes)

const start = async () => {
    try {
        await connectDB(process.env.DATABASE)
        app.listen(PORT, () => {
           console.log(`${PORT} yes I'm connected`)
        })
    } catch (error) {
        console.log(error)         
    }
}

start()