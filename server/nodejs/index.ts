import express from "express";
import "colorts/lib/string";
import Cors from "cors";

require("dotenv").config();

const app = express();

const SERVER_PORT = process.env.SERVER_PORT;

// Middleware

app.use(Cors);

app.use("/lists", () => {
  console.log("Middleware running");
  return 0;
});

app.use("/lists");

// listening to the server
app.listen(SERVER_PORT, () =>
  console.log(
    ("[server] 🌐 Server started at " + `http://localhost:${SERVER_PORT}`.bold)
      .magenta
  )
);
