import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app= express()
app.use(express.json())

dotenv.config()

app.listen(process.env.PORT,()=>{
    console.log("Escuachando en el puerto"+ process.env.PORT);
    mongoose.connect(process.env.CNX_MONGO)
    .then(()=>console.log("conected!"))
    .catch((error)=>console.log(error))
})