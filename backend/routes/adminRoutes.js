import express from 'express';
import { adminData } from '../controller/admin.controller.js';
import { checkRole, checkToken } from '../middlewear/auth.middlewear.js';

const adminRouter = express.Router();

adminRouter.get('/get',checkToken,checkRole('admin'),adminData);
export default adminRouter;