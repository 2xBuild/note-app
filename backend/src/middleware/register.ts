import type {Request, Response, NextFunction} from "express";
import { UserModel } from "../db/schema.js";
import { generateToken } from "../utils/jwt.js";

export const registerMid = (req: Request, res: Response, next: NextFunction) => {
const {name, email, password} = req.body;

UserModel.create({name, email, password}).then((user) => {


     
    req.statusMsg = "User registered successfully.";
    req.userData = user;
    next();

}).catch((err) => {
    res.status(400).json({"error":"User already exists or something went wrong."});
})
}