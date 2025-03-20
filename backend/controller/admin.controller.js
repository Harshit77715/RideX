import Booking from "../models/booking.model.js";

const adminData = async (req, res) => {
    try {
        const data = await Booking.find({})

        res.status(200).json({
            success: true,
            message: "Bookings fetched successfully",
            data
        });
    } catch (error) {
        console.error("Error fetching admin data:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

export { adminData };
