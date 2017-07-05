var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Task = require('./api/models/todoListModel');
var app = express();
var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/restful-todo');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var taskRoutes = require('./api/routes/todoListRoutes');
taskRoutes(app);

app.listen(port, () => console.log('todo list RESTful API server started on: ' + port));
