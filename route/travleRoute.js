const express = require('express');
const router = express.Router();
const travlecontroller=require('../controller/travlecontroller');
const { verifyJwt } = require('../token/verifyJwt');
const { verifyAdmin } = require('../token/verifyAdmin');

router.route('/').post(verifyJwt,verifyAdmin,travlecontroller.createTravle).get(travlecontroller.getTravle)
router.route('/limit').get(travlecontroller.getSumthing)
router.route('/:id').get(travlecontroller.getSingle)
module.exports=router;