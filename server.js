import express from 'express';
import productsRotes from './routes/routes.js';

import helmet from 'helmet';

/* import admin from 'firebase-admin';
import jsonData from './serviceaccountkey.js';
admin.initializeApp({
    credential: admin.credential.cert(jsonData),
    databaseURL : "https://webshopapi-8f487.firebaseio.com/"
  }); */


const app = express();
const PORT = 6060;

app.use(express.json());

app.use(helmet());


app.get("/",(req,res)=>{
    res.end("Start Page")
})

app.use("/api/products", productsRotes)


app.listen(PORT,()=>{
    console.log(`Server is running in ${PORT}`)
})