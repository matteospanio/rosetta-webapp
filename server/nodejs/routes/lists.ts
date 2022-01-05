import { Router } from "express";

// ROUTES
app.get("/", (req, res) => {
  res.json(`Main route`);
});

app.post("/", (req, res) => {
  res.json(`we are at lists route`);
});
