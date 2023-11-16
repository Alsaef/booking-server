const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

const app = express(); // Create an instance of the Express application


app.use(bodyParser.json());
const travleRouter=require('./route/travleRoute')
const hostRoute=require('./route/hostRoute')
const videoRoute=require('./route/videoRoute')
const bookingRouter=require('./route/bookingRouter')
const userRouter=require('./route/userRoute')
const amminRoute=require('./route/adminRoute')
const stackRoute=require('./route/stackRoute')
const jwtrouter=require('./route/jwtRoute')
// Middleware
app.use(express.json());
app.use(cors());

// Connect to the MongoDB database
mongoose.connect(process.env.ATLAS_URI).then(() => {
  console.log('Database Connect Successful');
});

// Define your routes
app.use('/api/v1/travle', travleRouter);
app.use('/api/v1/host', hostRoute);
app.use('/api/v1/video', videoRoute);
app.use('/api/v1/booking', bookingRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/user', amminRoute);
app.use('/api/v1/stack', stackRoute);
app.use('/jwt', jwtrouter);


app.get('/',(req,res)=>{
  res.send('server running!')
})
// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
