import type {Request, Response, NextFunction} from "express";
import { UserModel } from "../db/schema.js";
import { generateToken } from "../utils/jwt.js";
import { string } from "zod";

export const loginMid = async (req: Request, res: Response, next: NextFunction) => {
const { email, password} = req.body;

const result = await UserModel.findOne({email,password});

if(result){
  
    req.statusMsg = "User logged in successfully.";
    req.userData = result;
    next();
}
else {
    res.status(400).json({"error":"User not found."});
}}