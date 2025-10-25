import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import movieRoutes from "./routes/movieRoute.js";

dotenv.config();

const app = express();
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/moviedb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB terkoneksi"))
  .catch((err) => console.error(err));


app.use("/api/movies", movieRoutes);

app.listen(5000, () => console.log("Server berjalan di port 5000"));
