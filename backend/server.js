import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
// prevent mongo object injection
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import cors from "cors";
// Connect to the mongo db cluster and authenticateUser
import dbInit from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import huntsRouter from "./routes/huntsRoutes.js";
import huntProgressRouter from "./routes/huntProgressRoutes.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
  })
);

// Serve react build using nodejs server
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use(express.json());
app.use(mongoSanitize());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/hunts", authenticateUser, huntsRouter);
app.use("/api/v1/hunts", authenticateUser, huntProgressRouter);

// only when ready to deploy
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await dbInit(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
