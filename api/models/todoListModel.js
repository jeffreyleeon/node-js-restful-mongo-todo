'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: {
        type: String,
        Required: 'Kindly enter the name of the task',
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed'],
        }],
        validate: {
          validator: function(v) {
            return ['pending', 'ongoing', 'completed'].indexOf(v) !== -1;
          },
          message: '{VALUE} is not a valid status!'
        },
        default: ['pending'],
    },
});

module.exports = mongoose.model('Tasks', TaskSchema);
