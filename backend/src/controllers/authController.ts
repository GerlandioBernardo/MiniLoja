import {prisma} from "../config/prisma.js";
import  type {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {compareSync, hashSync} from "bcryptjs";

dotenv.config();

function generateToken(id:string){
    if(!process.env.CHAVE_SECRETA){
        throw new Error("CHAVE_SECRETA não está definida nas variáveis de ambiente.");
    }
    return jwt.sign({id}, process.env.CHAVE_SECRETA , {expiresIn: "5h"})

}

export async function signup(req: Request, res: Response){
    try {

        const {name, cpf, email, password} = req.body;

        const userExists = await prisma.user.findUnique({
            where:{email}
        });

        if(userExists){
            res.status(409).json({message: "User already registered"});
            return;
        }

        const hashPassword = hashSync(password, 10);

        const user = await prisma.user.create({
            data:{
                name,
                cpf,
                email,
                password: hashPassword,
                cart:{
                    create: []
                }

            }
        })

        res.status(200).json({
            user,
            massage: "User registered successfully",
            token: generateToken(user.id)
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export async function login(req: Request, res: Response){
    try {
        const {email, password} = req.body;

        const user = await prisma.user.findUnique({
            where:{
                email
            }
        })
        if(!user){
            res.status(404).json({message: "The user does not have a registration"});
            return;
        }

        const authorized = compareSync(password, user.password);

        if(!authorized){
            res.status(401).json({message: "Password incorrect "});
            return;
        }

        res.status(200).json({
            message: "Login successfully",
            token: generateToken(user.id)
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}