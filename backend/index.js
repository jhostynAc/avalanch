import express from "express"
import cors from "cors"
const app = express()
app.listen(3001)
app.get('/', (req, res)=>{res.send('Hola')})
console.log("Server is running",3001)