import Booking from "../models/booking.model.js"


const adminData = async(req, res)=>{
    try {
       const data = await Booking.find({})
       res.status(200).json(data); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg:"Internal server error"});
    }
};


export {adminData};