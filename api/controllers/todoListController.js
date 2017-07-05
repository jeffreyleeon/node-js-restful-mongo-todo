'use strict';

var mongoose = require('mongoose');
var Task = mongoose.model('Tasks');

var listAllTasks = (req, res) => {
    Task.find({}, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};

var createATask = (req, res) => {
    var newTask = new Task(req.body);
    newTask.save((err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};

var readATask = (req, res) => {
    Task.findById(req.params.taskId, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};

var updateATask = (req, res) => {
    Task.findOneAndUpdate(
        {_id: req.params.taskId},
        req.body,
        {
            new: true,
            runValidators: true,
        },
        (err, task) => {
            if (err) {
                res.send(err);
            }
            res.json(task);
        }
    );
};

var deleteATask = (req, res) => {
    Task.remove({
        _id: req.params.taskId,
    }, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Task successfully deleted' });
    });
};

module.exports = {
    listAllTasks,
    createATask,
    readATask,
    updateATask,
    deleteATask,
};
