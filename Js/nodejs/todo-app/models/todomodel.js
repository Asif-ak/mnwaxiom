const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuidv5 = require('uuid/[v1|v3|v4|v5]');

const todoSchema = new Schema({
    todoUUID:{type: UUID,default:new uuidv5()},
    todoName: String,
    createOn:{type: Date, default:new Date.now()},
    todoTask: String,
    completedOn:{type: Date}
})