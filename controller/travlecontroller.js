const { default: mongoose } = require('mongoose');
const TravelPlace= require('../model/travle')
const { ObjectId } = mongoose.Types; 

module.exports.createTravle=async(req,res)=>{
    try {
     
        const travle= new TravelPlace(req.body)

        const result= await travle.save()
        res.status(201).json({ message: 'Travel place created successfully', data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create a travel place' });
    }
}


module.exports.getTravle = async (req, res) => {
    try {
        const { searchQuery } = req.query;
        const filter = {
            $or: [
              { name: { $regex: searchQuery, $options: 'i' } }, // Case-insensitive name search
              { location: { $regex: searchQuery, $options: 'i' } }, // Case-insensitive location search
            ],
          };
      // Use Mongoose's find() method to retrieve all travel places
     if (searchQuery) {
        const travelPlaces = await TravelPlace.find(filter);
        res.status(200).json({ status:'success',data:travelPlaces });
     }
    else{
        const travelPlaces = await TravelPlace.find();
        res.status(200).json({ status:'success',data:travelPlaces });
    }
      // Send the retrieved travel places as a JSON response
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to retrieve travel places' });
    }
  };

module.exports.getSingle=async(req,res)=>{
   try {
    const id = req.params.id
    const result= await TravelPlace.aggregate([
        {$match:{_id: new ObjectId(id)}},

        {
            $lookup:{
                from: 'hosts',
                localField: 'host.name',
                foreignField: 'name',
                as:'hostDetils'
            }
        }
        
    ])

    res.status(200).json({
        status:'successful',
        data: result
    })
   } catch (error) {
    console.error(error);
      res.status(500).json({ message: 'Failed to retrieve travel places' });
   }
  }


  module.exports.getSumthing=async(req,res)=>{
    try {
      const limit = 3; // Set the limit to 3
  
      // Use Mongoose's find method to retrieve data with the specified limit
      const data = await TravelPlace.find().limit(limit);
  
      // Send the data as a JSON response
      res.status(200).json({
        status:'success',
        data:data
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
  }