const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    role:{
        type:String,
        enum: ['user', 'admin'],
        default: 'user',
    }
})


const user=mongoose.model('user',userSchema)
module.exports=user