import express from "express";
import dotenv from "dotenv";
import handleError from "./middleweare/errorHandler";
import logger from "./middleweare/logger";
import imageRoute from "./routes/ImageRoute";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.use(logger);

app.get("/", async (req, res) => {
  await res.send("hello world");
});

app.use("/images", imageRoute);

app.use(handleError);

export default app;
