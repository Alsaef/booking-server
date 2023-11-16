const Video=require('../model/travleVideo')


module.exports.CreateVideo = async (req, res) => {
    try {
        const video = new Video(req.body); 

        const result = await video.save();
        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "An error occurred while saving the video."
        });
    }
};

module.exports.getVideo=async(req,res)=>{
    try {
       const result= await Video.find({}) 
       res.status(200).json({
        status: "success",
        data: result
       })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "An error Not Found"
        });
    }
}