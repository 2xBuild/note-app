import type { Request, Response, NextFunction } from "express";
import { NotesModel } from "../db/schema.js";

export const createNewNote = async (req: Request, res: Response, next: NextFunction) => {

    const content  = req.body.content;
    if ( !content) return res.status(400).json({"error":"invalid content"});

    const result = await NotesModel.create({note:content, user: req.userData!._id});

    if(!result) return res.status(400).json({"error":"something went wrong."});

    res.status(200).json({"status" : "success", "message": "Note created successfully." , "noteId": result._id});

  
}

export const editNote = async (req: Request, res: Response, next: NextFunction) => {

    const {content, noteId} = req.body;
    if ( !content || !noteId) return res.status(400).json({"error":"invalid data."});

    const result = await NotesModel.findOneAndUpdate({user: req.userData!._id, _id: noteId}, {note:content});

    if(!result) return res.status(400).json({"error":"something went wrong."});

    res.status(200).json({"status" : "success", "message": "Note updated successfully."});
}

export const deleteNote = async (req: Request, res: Response, next: NextFunction) => {

    const {noteId} = req.body;
    if ( !noteId) return res.status(400).json({"error":"invalid data."});

    const result = await NotesModel.findOneAndDelete({user: req.userData!._id, _id: noteId});

    if(!result) return res.status(400).json({"error":"something went wrong."});

    res.status(200).json({"status" : "success", "message": "Note deleted successfully."});
}

export const getNote = async (req: Request, res: Response, next: NextFunction) => {
     const noteId = req.body.noteId;
    const result:any = await NotesModel.findOne({user: req.userData!._id,  _id: noteId});

    if(!result) return res.status(400).json({"error":"something went wrong."})
        console.log(result);
    res.status(200).json({"status" : "success", "note": result.note})
}