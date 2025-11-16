import {z} from "zod";
import type {Request, Response, NextFunction} from "express";




export const zodValidationRegister =  (req: Request, res: Response, next: NextFunction) => {

    const userRegisterSchema = z.object({
        name: z.string().min(3).max(20),
        email: z.string().email(),
        password: z.string().min(6)
    })

    const result = userRegisterSchema.safeParse(req.body);

    if(result.success){
        next();
    }
    else {
        res.status(400).json({"error":"invalid data format"});
    }

}


export const zodValidationLogin =  (req: Request, res: Response, next: NextFunction) => {

    const userLoginSchema = z.object({
        email: z.string().email(),
        password: z.string().min(6)
    })

    const result = userLoginSchema.safeParse(req.body);

    if(result.success){
        next();
    }
    else {
        res.status(400).json({"error":"invalid data format."});
    }

}


