const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend");
});

app.post("/insertCustomer", (req, res) => {
  db.insertCustomer(req.body);
  res.sendStatus(200);
});

app.post("/findCustomer", async (req, res) => {
  const data = await db.findCustomer(req.body);
  res.send(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
