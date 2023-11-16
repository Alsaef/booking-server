const booking=require('../model/booking')

module.exports.createBooking = async (req, res) => {
    try {
     // Process and save host data in your database
     const newHost = new booking(req.body); // Assuming you have a Host model
     const savedHost = await newHost.save();
     res.status(201).json(savedHost);
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 }


 module.exports.getemailBooking= async (req, res) => {
    try {
        const email = req.query.email; // Get the email from the query parameter
    
        console.log(`Email parameter: ${email}`); // Log the email
    
        if (!email) {
          return res.status(400).json({ error: 'Email parameter is missing' });
        }
    
        // Query the database to find bookings matching the email
        const bookings = await booking.find({ email: email }).sort({createdAt:-1}); // Adjust the field name as per your model
    
    
        if (bookings.length === 0) {
          return res.status(404).json({ error: 'No bookings found for the provided email' });
        }
    
        res.status(200).json(bookings);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  };

  module.exports.allGetBooking=async(req,res)=>{
    try {
      const result=await booking.find({}).sort({createdAt:-1})
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }

  }