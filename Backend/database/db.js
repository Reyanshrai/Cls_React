import mongoose from 'mongoose'

export const dbConnection = () => {
    try{
        const connect = mongoose.connect("mongodb://localhost:27017/randomDatabase")
        console.log("MongoDb Connected")
    }catch(error){
        console.error(error)
    }
}


export default dbConnection
