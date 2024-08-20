import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
import userRoutes from "./routes/userRoutes";
import { verifyJwt } from "./service/jwtAuthService";


const app = express();
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'observe'],
  }));
  app.options('*', cors());
  app.use(bodyParser.json())

  app.use('/users', userRoutes);

  mongoose.connect(process.env.MONGODB as string).then(() => {
    console.log("DB Connected");
    app.listen(3001, () => {
      console.log("Server started on port 3001");
    })
  }).catch((e) => {
    console.log(e);
  });
