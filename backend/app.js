import express from 'express';
import dotenv from 'dotenv';
import productRouter from "./routes/productRoutes.js"

dotenv.config();

let app = express();

app.use(express.json());

app.use("/api", productRouter)




// console.log(process.env.MONGO_URI);

 


export default app;