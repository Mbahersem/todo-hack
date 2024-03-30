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
    const task = new Task({title: req.body.title, description: req.body.description});
    try {
        await task.save();
        res.status(201).json(task);
    } catch(err) {
        next(err);
    }
}

exports.checkTask = async (req, res, next) => {
    const update = {done: true, updatedAt: Date.now()};

    try {
        const updated = await Task.findByIdAndUpdate(req.params._id, update);
        if(updated == null) {
            res.status(404).json({msg: 'Unknown _id'});
        } else {
            res.status(200).json({msg: 'Task checked'});
        }
    } catch (err) {
        next(err);
    }
}

exports.uncheckTask = async (req, res, next) => {
    const update = {done: false, updatedAt: Date.now()};

    try {
        const updated = await Task.findByIdAndUpdate(req.params._id, update);
        if(updated == null) {
            res.status(404).json({msg: 'Unknown _id'});
        } else {
            res.status(200).json({msg: 'Task unchecked'});
        }
    } catch (err) {
        next(err);
    }
}

exports.updateTask = async (req, res, next) => {
    const body = Object.keys(req.body);
    const update = {updatedAt: Date.now()};

    for(attr of body) {
        update[attr] = req.body[attr];
    }

    try {
        const updated = await Task.findByIdAndUpdate(req.params._id, update);
        if(updated == null) {
            res.status(404).json({msg: 'Unknown _id'});
        } else {
            res.status(200).json(updated);
        }
    } catch (err) {
        next(err);
    }
}

exports.removeTask = async (req, res, next) => {
    try {
        const deleted = await Task.findByIdAndDelete(req.params._id);
        if(deleted == null) {
            res.status(404).json({msg: "Unknown _id"});
        } else {
            res.status(200).json({msg: "Task deleted"});
        }
    } catch (err) {
        next(err);
    }
}