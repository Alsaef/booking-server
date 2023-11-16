const express = require('express');
const router = express.Router();
const stackController=require('../controller/stackController')
const {verifyJwt}=require('../token/verifyJwt')
const {verifyAdmin}=require('../token/verifyAdmin')
router.route('/').get(verifyJwt,verifyAdmin,stackController.CreateStack)


module.exports=router;