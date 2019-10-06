const config = require('../helper/config');
const mongoose = config.mongoose;

const todoSchema = mongoose.Schema({
    
    todoName: {type:String,min:1, max: 50, required:true},
    createOn:{type: Date, default: Date.now(), required:true},
    todoTask: {type:String,min:1, max: 500, required:true},
    completedOn:{type: Date}
});


// the below is virtual getter and virtual setter can also be created:
// link: https://mongoosejs.com/docs/guide.html#virtuals

// todoSchema.virtual('Full Todo Schema').get((todoObjectID)=>{
//     return this.todo.where(this.todo.schema.todoObjectID===todoObjectID);
// })

module.exports = mongoose.model('todo',todoSchema);  