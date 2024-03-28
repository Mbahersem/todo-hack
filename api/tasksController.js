const Task = require("../models/tasks");

exports.getTasks = async (req, res, next) => {
    const tasks = await Task.find();
    try {
        if(tasks.length >= 1) {
            res.status(200).json(tasks);
        } else {
            res.status(404).json({msg: "No tasks"});
        }
    } catch(err) {
        next(err);
    }
}

exports.addTask = async (req, res, next) => {
    const task = new Task({task: req.body.task});
    try {
        await task.save();
        res.status(201).json(task);
    } catch(err) {
        next(err);
    }
}

exports.checkTask = async (req, res, next) => {
    const update = {done: true};
    try {
        await Task.findByIdAndUpdate(req.params._id, update);
        res.status(200).json({msg: "Task updated"});
    } catch (err) {
        next(err);
    }
}

exports.removeTask = async (req, res, next) => {
    try {
        await Task.findByIdAndDelete(req.params._id);
        res.status(200).json({msg: "Task deleted"});
    } catch (err) {
        next(err);
    }
}