import type { Request, Response, NextFunction } from "express";
// import { UserModel } from "../db/schema.js";
import { verifyToken } from "../utils/jwt.js";

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
   const jwt_token = req.headers.token;

   if(!jwt_token) return res.status(401).json({"error":"Unauthorized"});

   const decoded = verifyToken(jwt_token as string);

   if(!decoded) return res.status(401).json({"error":"Unauthorized"});

   req.userData = decoded;
   next();


}