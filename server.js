import express, { json } from 'express'
import dotenv from 'dotenv'
import ConnectDB from './config/db.js'
import itemRoutes from './routes/ItemsRoute.js';
import cors from 'cors'

const app = express();

// configure env
dotenv.config()

// database connecting
ConnectDB();

// middlewares 
app.use(cors())
app.use(express.json())

// router
app.use('/api/v1/items' , itemRoutes)

app.get('/',(req,res)=>{
    res.send(`<h1>Server is working on ${process.env.PORT}</h1>`)
})

// PORT 
const PORT = process.env.PORT
// listen
app.listen(PORT, ()=>{
    console.log(`Server is working on ${PORT}`)
})