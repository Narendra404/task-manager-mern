const express = require("express");
const router = express.Router();
const { insertTask } = require("../controllers/taskController");

router.post("/insertTask", insertTask);

module.exports = router;
