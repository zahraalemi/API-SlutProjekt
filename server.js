import express from 'express';
import productsRotes from './routes/routes.js';

import helmet from 'helmet';


const app = express();
const PORT = 3030;

app.use(express.json());

app.use(helmet());


app.get("/",(req,res)=>{
    res.end("Start Page")
})

app.use("/api/products", productsRotes)


app.listen(PORT,()=>{
    console.log(`Server is running in ${PORT}`)
})