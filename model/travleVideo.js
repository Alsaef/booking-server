const mongoose = require('mongoose');
const validator = require('validator');

const VideoSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    link: {
        type: String,
        require: true,
        validate: {
            validator: (value) => {
                return validator.isURL(value); 
            },
            message: 'Invalid URL format'
        }
    }
})


const Video=mongoose.model('video',VideoSchema)

module.exports=Video;