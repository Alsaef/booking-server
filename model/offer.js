const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const validator = require('validator');

const offerSchema = mongoose.Schema({
  travle: {
    name:{
    type: String,
    require: true,

    },
    id:{
        type:ObjectId,
        require:true,
    }
  },
  description: {
    type: String,
    require: true,
  },
  location: {
    name: {
      type: String,
      required: true,
    },
  },
  imageUrl: {
    type: String,
    validate: {
      validator: validator.isURL, // Use validator to check for a valid URL format
      message: 'Invalid URL format',
    },
  },
  host: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: ObjectId,
      ref: 'User',
    },
  },
  offerPrice: {
    type: Number,
    required: true,
  },
 offerStartDate: {
    type: Date,
    required: true,
  },
 offerEndDate: {
    type: Date,
    require: true,
  },
  OfferDiscount: {
    type: Number, // You can adjust the data type as needed (e.g., percentage or fixed amount)
  },
offerName: {
    type: String, // Name of the discount (e.g., "Winter Special Discount")
  },

  // Other fields specific to offers
  // You can add more fields as needed
  view: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

const Offer = mongoose.model('Offer', offerSchema);
module.exports = Offer;
