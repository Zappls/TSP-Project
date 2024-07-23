import express from "express";
import { getAllLocations, addLocation } from "./routes/locations.js";

const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my Website");
});

app.get("/locations", getAllLocations);

app.post("/locations", addLocation);

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
