import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import articulos from './routes/articulos.js'
import categorias from './routes/categorias.js'
import movimientos from './routes/movimientos.js'
import terceros from './routes/terceros.js'
 
const app= express()
app.use(express.json())
app.use("/api/articulos", articulos)
app.use("/api/categorias",categorias)
app.use("/api/movimientos",movimientos)
app.use("/api/terceros",terceros)

dotenv.config()

app.listen(process.env.PORT,()=>{
    console.log("Escuachando en el puerto"+ process.env.PORT);
    mongoose.connect(process.env.CNX_MONGO)
    .then(()=>console.log("conected!"))
    .catch((error)=>console.log(error))
})