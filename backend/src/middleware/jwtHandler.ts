import type { Request, Response, NextFunction } from "express";
import { generateToken } from "../utils/jwt.js";

export const JwtHandler = (req: Request, res: Response, next: NextFunction) => {
    const token = generateToken(req.userData!._id, req.userData!.name);
    const statusMsg = req.statusMsg as string;

    res.status(200).json({"status" : "success", "token": token, "message": statusMsg});

}