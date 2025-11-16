import jwt from "jsonwebtoken";
import { email } from "zod";
import "dotenv/config"


export function generateToken(userId:Object,name:string) {

    const JWT_SECRET:string = process.env.JWT_SECRET as string;
    const token = jwt.sign({ _id: userId, name: name }, JWT_SECRET, { expiresIn: "3d" });
    return token;
}


export function verifyToken(token:string) {
    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
  
    return decoded;
    } catch (error) {
        return false
    }
}
