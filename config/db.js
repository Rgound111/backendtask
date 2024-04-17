import mongoose from 'mongoose'


const ConnectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to MongoDb successfully ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error while connecting DB ${process.env.MONGO_URL}`)
    }
}

export default ConnectDB