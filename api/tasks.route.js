const router = require("express").Router();
const controller = require("./tasksController");

router.get('/tasks', controller.getTasks);

router.post('/tasks/add', controller.addTask);

router.put('/tasks/:_id/check', controller.checkTask);

router.put('/tasks/:_id/uncheck', controller.uncheckTask);

router.put('/tasks/:_id', controller.updateTask);

router.delete('/tasks/:_id', controller.removeTask)

module.exports = router;