import type {Request, Response, NextFunction} from "express";
import dotenv from "dotenv";
import type {JwtPayload} from "jsonwebtoken";
import jwt from "jsonwebtoken";

dotenv.config();

export async function authMiddleware(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization;

    if(!authHeader){
        res.status(401).json({message: "Token not provided"});
        return;
    }

    const [, token] = authHeader.split(' ');

    jwt.verify(token as string, process.env.CHAVE_SECRETA as string, (error, decoded)=>{
        if(error){
            res.status(401).json({message: "Token Invalid"});
            return;
        };

        req.body.id = (decoded as JwtPayload).id;
        next();
    } )
}
