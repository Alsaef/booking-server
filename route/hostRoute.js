const express = require('express');
const router = express.Router();
const hostController=require('../controller/hostController')
const {verifyJwt}=require('../token/verifyJwt')
const {verifyAdmin}=require('../token/verifyAdmin')
router.route('/').post(verifyJwt,verifyAdmin,hostController.createHost).get(hostController.getHost)
router.route('/:id').get(hostController.getSingle).patch(hostController.updateHost)


module.exports=router;