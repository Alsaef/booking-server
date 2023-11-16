const Host = require('../model/host')


module.exports.createHost = async (req, res) => {
   try {
    // Process and save host data in your database
    const newHost = new Host(req.body); // Assuming you have a Host model
    const savedHost = await newHost.save();
    res.status(201).json(savedHost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports.getHost=async(req,res)=>{
    try {
       const result=await Host.find({}) 
       res.status(200).json({status:'success',data:result})
    } catch (error) {
        console.error(error);
    res.status(500).json({ error: 'Internal Server Error' }); 
    }
}

module.exports.getSingle=async(req,res)=>{
   try {
    const result= await Host.findOne()
    res.status(200).json(result)
   } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' }); 
   }
}

  module.exports.updateHost=async(req,res)=>{
    try {
        const hostId = req.params.id; // Get the host ID from the URL
        const updatedData = req.body; // Get the updated data from the request body

        const updatedHost = await Host.findByIdAndUpdate(hostId, updatedData, { new: true });
    
        if (!updatedHost) {
          return res.status(404).json({ error: 'Host not found' });
        }
    
        // Send a success response with the updated host data
        res.status(200).json({ message: 'Host updated successfully', updatedHost });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the host' });
      }
  }