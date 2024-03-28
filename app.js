const express = require("express");
const taskRouter = require("./api/tasks.route");
const errorHandler = require("./middlewares/error");

const app = express();

app.use(errorHandler);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'content-type, authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use(express.json());

app.use('/api', taskRouter);

module.exports = app;
