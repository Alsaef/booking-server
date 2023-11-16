const express = require('express');
const router = express.Router();
const videoController=require('../controller/videoController')

router.route('/').post(videoController.CreateVideo).get(videoController.getVideo)
module.exports=router;