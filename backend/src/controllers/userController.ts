import * as userService  from "../services/userService.js";
import type {Request, Response} from "express";

export async function deleteUser(req: Request, res: Response){
    try {
        const {id} = req.body;

        const user = await userService.deleteUser(id);

        if(!user){
            res.status(400).json({message: "Error deleting user"});
            return;
        }

        res.status(200).json({message: "User successfully deleted"});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}