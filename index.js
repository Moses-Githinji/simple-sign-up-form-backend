import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userCreator from "./routes/userCreator.js";
import { getUsers } from "./controllers/getUsers.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8100;

const mongoConnect = async () => {
  mongoose.set("strictQuery", true);
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connection was completed successfully");
  } catch (err) {
    throw err;
  }
};

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/auth", userCreator);
app.use("/api/users", getUsers);

// app.listen(8100, () => {
//   mongoConnect();
//   console.log("Connection to backend has been completed successfully!!");
// });

mongoConnect().then(() => {
  app.listen(PORT, () => {
    console.log("Connection to backend has been completed successfully!!");
  });
});
