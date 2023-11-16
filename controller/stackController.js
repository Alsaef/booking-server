const user=require('../model/user')
const Booking=require('../model/booking')
const TravelPlace=require('../model/travle')


module.exports.CreateStack=async(req,res)=>{
    try {
        // Get the estimated document counts for your models using Mongoose
        const usersCount = await user.estimatedDocumentCount();
        const bookingsCount = await Booking.estimatedDocumentCount();
        const travelPlacesCount = await TravelPlace.estimatedDocumentCount();
    
        res.send({
          users: usersCount,
          bookings: bookingsCount,
          travelPlaces: travelPlacesCount,
        });
      } catch (error) {
        // Handle any errors that might occur
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}