import express from 'express'
import dbConnection from './database/db.js'
dbConnection()

const app = express()

app.get('/',(req,res) => {
    res.send("<h1>Backend is Going on...</h1>")
})

app.listen(3000,()=>{
    console.log("Server has been started with port no 3000")
})