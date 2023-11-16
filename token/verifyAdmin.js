const user=require('../model/user')

module.exports.verifyAdmin = async (req, res, next) => {
    try {
      const email = req.decoded.email;
      
      // Assuming you have a Mongoose model named 'User'
      const userControll = await user.findOne({ email: email });
  
      if (userControll?.role !== "admin") {
        return res.status(403).send({ error: true, message: 'You Are Not Admin' });
      }
      
      next();
    } catch (error) {
      // Handle any errors that occur during the database query
      res.status(500).send({ error: true, message: 'Server Error' });
    }
  };
  