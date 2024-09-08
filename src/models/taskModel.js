const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskDetails: {
    type: String,
    required: true,
  },
  taskId: {
    type: Number,
    required: true,
    unique: true,
  },
  taskStatus: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
  },
  updatedDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Task", taskSchema);
