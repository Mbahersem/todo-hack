const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    done: {type: Boolean, default: false},
    task: {type: String}
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;