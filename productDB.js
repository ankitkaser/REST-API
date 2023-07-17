const connectDB = require('./db/connect')
const productModel  = require('./models/product')
require('dotenv').config()

const productJson = require('./product.json')

const start = async () => {
    try {
        await connectDB(process.env.DATABASE)
        await productModel.deleteMany()
        await productModel.create(productJson)
        console.log("success")
        process.exit()
        
    } catch (error) {
      console.log(error)  
    }
}

start()