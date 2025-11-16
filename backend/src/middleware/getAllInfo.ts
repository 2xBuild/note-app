import type { Request, Response, NextFunction } from "express";
import {  UserModel, NotesModel } from "../db/schema.js";


export const getAllInfo = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.userData!._id;

    const result = await UserModel.findById(userId).select("-password");
    const notes = await NotesModel.find({user: userId});


    if(!result) return res.status(400).json({"error":"something went wrong."});
    if (!notes) return res.status(400).json({"error":"something went wrong."});
    const resp= {"status" : "success", "result":{user: result, notes:notes}}

    console.log(resp);

    res.status(200).json(resp);
}