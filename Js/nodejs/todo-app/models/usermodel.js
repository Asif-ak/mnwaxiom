const helper = require('../helper/helper');
const mongoose = helper.mongoose;

const usermodel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim:true,
        lowercase:true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true
    }
}, {
    timestamps: true
})
module.exports=mongoose.model('User',usermodel);