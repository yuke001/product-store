import express from 'express';
import dotenv from 'dotenv';
import productRouter from "./routes/product.route.js"
import connectDB from "./config/db.js";

dotenv.config();

connectDB();
let app = express();

app.use(express.json());

app.use("/api/products", productRouter)




// console.log(process.env.MONGO_URI);

 


export default app;