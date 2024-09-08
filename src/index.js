const express = require("express");
const app = express();
const PORT = 3003;

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening to port : ${PORT}`);
});
