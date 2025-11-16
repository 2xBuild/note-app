import express from "express";
const app = express()
import type {Request, Response, NextFunction} from "express"
import { zodValidationLogin, zodValidationRegister } from "./middleware/zodValidation.js";
import { registerMid } from "./middleware/register.js";
import { loginMid } from "./middleware/login.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { JwtHandler } from "./middleware/jwtHandler.js";
import { authenticate } from "./middleware/authenticate.js";
import { createNewNote, editNote , deleteNote, getNote } from "./middleware/noteEditor.js";
import { getAllNotes } from "./middleware/getAllNotes.js";
import { getAllInfo } from "./middleware/getAllInfo.js";
import cors from "cors";

app.use(cors());
app.use(express.json())
app.get("/",(req,res) => {
    res.send("Hello World")
    
})



app.post("/register",zodValidationRegister, registerMid,JwtHandler)


app.post("/login", zodValidationLogin, loginMid,JwtHandler)



app.post("/newNote", authenticate ,createNewNote)

app.post("/deleteNote", authenticate ,deleteNote) // delete req instead 
app.post("/getNote", authenticate ,getNote)

app.post("/editNote",authenticate, editNote)



app.get("/getAllNotes", authenticate,getAllNotes) 
app.get("/me", authenticate,getAllInfo)

app.use(errorHandler);


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})