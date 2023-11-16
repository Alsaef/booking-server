const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.ObjectId
const bookingSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    tripStartDate: {
        type: Date,
        require: true
    },
    tripEndDate: {
        type: Date,
        require: true
    },
    userName: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    userLocation: {
        type: String,
        require: true
    },
    userContact: {
        type: Number,
        require: true
    },
   host:{
    name:{
        type:String,
        require:true,
    },
    id:{
        type:ObjectId,
        ref:'host',
        require:true
    }
   }
}, {
    timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
