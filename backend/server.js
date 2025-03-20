import express from 'express';
import 'dotenv/config';
import db from './config/db.js';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import locationRouter from './routes/locationRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';
import carRouter from './routes/carRoutes.js';
import adminRouter from './routes/adminRoutes.js';

const app = express()

app.use(express.json());
app.use(cors({origin:["http://127.0.0.1:5500/frontend",'http://127.0.0.1:5501','https://ridex11.netlify.app']}));

app.use('/user',userRouter);
app.use('/location',locationRouter);
app.use('/car',carRouter);
app.use('/booking',bookingRouter);
app.use('/admin',adminRouter);

const PORT = process.env.PORT;

app.listen(PORT,async()=>{
    await db();
    console.log(`Server is running on ${PORT}`);
});