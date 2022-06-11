const mongoose = require('mongoose')

require('dotenv').config({ path: "config.env" })

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            // useFindAndModify
        })
        console.log("Base de datos conectada")
    } catch (error) {
        console.log(error)
        isPropertyAccessChain.exit(1)
    }
}

module.exports = conectarDB
