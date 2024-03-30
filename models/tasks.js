const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    done: {type: Boolean, default: false},
    title: {type: String, required: [true, "A title is needed"]},
    description: {type: String},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;