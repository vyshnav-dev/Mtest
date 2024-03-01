import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./Routes/userRoutes.js";
import cors from "cors";
import Connection from "./Connection/Connection.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO || "mongodb://localhost:27017/yourdb");

//middleware
app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/user", userRoute);


app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const message = err.message || "something went worng";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: message,
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  console.log(`connected to backend ${PORT}`);
  Connection();
});
