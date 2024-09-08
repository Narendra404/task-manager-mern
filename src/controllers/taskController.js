const Task = require("../models/taskModel");

const insertTask = async (req, res) => {
  try {
    const result = await Task.insertMany(req.body);
    console.log("Result : ", result);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.error("Error while inserting task in method insertTask : ", error);
  }
};

module.exports = {
  insertTask,
};
