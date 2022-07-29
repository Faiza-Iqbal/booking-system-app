// lib
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";

// src
import bookingRotes from "./routes/bookings";
import tourRoutes from "./routes/tours";

const app = express();
const port = 4000;
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get("/", async (req, res) => res.send("Server working!"));

app.use("/bookings", bookingRotes);
app.use("/tours", tourRoutes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

const CONNECTION_URL_DB = process.env.CONNECTION_URL || "";

mongoose
  .connect(CONNECTION_URL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)

  .then(() => app.listen(() => console.log(`Database connected`)))
  .catch((error) => console.log(error.message));
