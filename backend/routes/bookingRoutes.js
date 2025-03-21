import express from 'express';
import { checkToken } from '../middlewear/auth.middlewear.js';
import { carBooking, getDriverBooking, updateStatus } from '../controller/booking.controller.js';
import { getUserBooking } from '../controller/user.controller.js';

const bookingRouter = express.Router();

bookingRouter.get('/getDriverBooking',checkToken,getDriverBooking);
bookingRouter.get('/getUserBooking',checkToken,getUserBooking);
bookingRouter.post('/create/:carId',checkToken,carBooking);
bookingRouter.put('/update/:bookingId',checkToken,updateStatus);

export default bookingRouter;
