const helper = require('../helper/helper');
const mongoose = helper.mongoose;

const todoSchema = mongoose.Schema({
    
    title: {type:String,min:1, max: 50, required:true},
    description: {type:String,min:1, max: 500, required:true},
    completedOn:{type: Date},
    isCompleted: { type: Boolean, required: true, default: false },
    createdBy:{type:mongoose.Schema.Types.ObjectId, ref:'User',required:true}
},{timestamps:true});


// the below is virtual getter and virtual setter can also be created:
// link: https://mongoosejs.com/docs/guide.html#virtuals

// todoSchema.virtual('Full Todo Schema').get((todoObjectID)=>{
//     return this.todo.where(this.todo.schema.todoObjectID===todoObjectID);
// })

module.exports = mongoose.model('todo',todoSchema);  