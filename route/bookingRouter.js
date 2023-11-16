const express = require('express');
const router = express.Router();
const bookingController=require('../controller/bookingController');
const { verifyJwt } = require('../token/verifyJwt');

router.route('/').post(bookingController.createBooking).get(verifyJwt,bookingController.getemailBooking)
router.route('/allbooking').get(bookingController.allGetBooking)

module.exports=router;