import type {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";

export const errorHandler = (err:any, req:Request, res:Response, next:NextFunction) => {
  if (err instanceof SyntaxError && "body" in err) {
    return res.status(400).json({ error: "Invalid JSON" });
  }

  next(err); // continue for other types of errors
};