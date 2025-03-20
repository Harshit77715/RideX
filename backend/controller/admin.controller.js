import Booking from "../models/booking.model.js"


const adminData = async(req, res)=>{
    try {
       const data = await Booking.find({})
       .populate({
        path: "customerId", 
        select: "name", 
      })
      .populate({
        path: "driverId",
        select: "name", 
      })
      .populate({
        path: "carId", 
        select: "model", 
      });
       res.status(200).json(data); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"});
    }
};


export {adminData};