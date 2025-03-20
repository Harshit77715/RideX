import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const checkToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(400).json({ msg: "Invalid or missing token" });
    }

    const token = authHeader.split(' ')[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = decode;
    next();

  } catch (error) {
    console.log("Token Middleware Error:", error.message);
    return res.status(401).json({ msg: "Unauthorized: Invalid or expired token" });
  }
};

const checkRole = (...role) => {
  return async (req, res, next) => {
    try {
      const user = await User.findOne({email:req.user.email});
      const userRole = user.role;
      
      console.log(userRole);
      if(!role.includes(userRole)){
        return res.status(403).json({msg:"Unauthorized"});
      }
      next();
    } catch (error) {
      console.log("Token Middleware Error:", error.message);
      return res.status(401).json({ msg: "Unauthorized: Invalid or expired token" });
    }
  }
}

export { checkToken, checkRole };
