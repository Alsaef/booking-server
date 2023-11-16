const express=require('express')
const adminController=require('../controller/adminController');
const { verifyJwt } = require('../token/verifyJwt');
const router=express.Router()

router.route('/admin/:email').get(verifyJwt,adminController.GetAdmin)

module.exports=router;