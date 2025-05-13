import { NextFunction, Request, Response } from "express";
import {verify} from "jsonwebtoken"
import { JWT_SECRET } from "./configs";

export const middleware = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers["authorization"] ?? "";
    const decoded = verify(token, JWT_SECRET);

    if (typeof decoded === "object" && "userid" in decoded) {
        req.body.userId = decoded.useId
        next()
    }else{
        res.status(403).json({
            message: "Unauthorized"
        })
    }
}