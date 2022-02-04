const mongoose = require("mongoose");

const { Schema } = mongoose;

const TaskTable = new Schema({
    Fullname: String,
    email: Number,
    password: Date,
  });

module.exports = TaskTable = mongoose.model('tasktable', taskTablecheme);