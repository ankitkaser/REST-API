const mongoose  = require('mongoose')
// const uri = process.env.DATABASE


const connectDB = (uri) => {
    console.log("connect database successfully")
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

}

module.exports = connectDB