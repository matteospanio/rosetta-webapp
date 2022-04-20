import express from "express";
import mongoose from "mongoose";
import "colorts/lib/string";
const cors = require("cors");

require("dotenv").config();

const logger = require("./middleware/logger");
const lists = require("./routes/lists");

const app = express();

const SERVER_PORT = process.env.SERVER_PORT;

// Middleware
app.use(logger);
app.use(express.json());
app.use(cors());

// routes
app.use("/lists", lists);

// mongoDB
mongoose
    .connect("mongodb://localhost:27017/lists")
    .then(() => console.log("[server] Connected to MongoDB".green))
    .catch((err: Error) =>
        console.log(`[server] ${err.name}: ${err.message}`.red)
    );

// listening to the server
app.listen(SERVER_PORT, () =>
    console.log(
        (
            "[server] 🌐 Server started at " +
            `http://localhost:${SERVER_PORT}`.bold
        ).magenta
    )
);
