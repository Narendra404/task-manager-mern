const express = require("express");
const app = express();
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use("/task-manager/v1", taskRoutes);
app.listen(PORT, () => {
  console.log(`Listening to port : ${PORT}`);
});
