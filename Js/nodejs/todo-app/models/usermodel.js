const helper = require('../helper/helper');
const mongoose = helper.mongoose;

const usermodel = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
module.exports=mongoose.model('User',usermodel);