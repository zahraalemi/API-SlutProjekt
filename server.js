import express from 'express';
import productsRotes from './routes/products.js';
const app = express();
const PORT = 6060;


app.use(express.json())

app.get("/",(req,res)=>{
    res.end("Start Page")
})

app.use("/api/products", productsRotes)

app.listen(PORT,()=>{
    console.log(`Server is running in ${PORT}`)
})