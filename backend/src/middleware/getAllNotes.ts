import type { Request, Response, NextFunction } from "express";
import { NotesModel } from "../db/schema.js";

export const getAllNotes = async (req: Request, res: Response, next: NextFunction) => {

    const result = await NotesModel.find({user: req.userData!._id});

    if(!result) return res.status(400).json({"error":"something went wrong."});
    console.log(result);

    res.status(200).json({"status" : "success", "notes": result});
  
}
