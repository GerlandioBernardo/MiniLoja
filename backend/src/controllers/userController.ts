import * as userService from "../services/userService.js";
import type { Request, Response } from "express";
import type { AuthRequest } from "../types/auth.js";

export async function deleteUser(req: AuthRequest, res: Response) {
    try {
        const id = req.user?.id;

        if (!id) return;

        const existsProductsCart = await userService.findByIdCartUser(id);

        if (existsProductsCart.length > 0) {
            res.status(400).json({
                message: "It is not possible to delete the account with products in the cart"
            });
            return;
        }


        const user = await userService.deleteUser(id);

        if (!user) {
            res.status(400).json({ message: "Error deleting user" });
            return;
        }

        res.status(200).json({ message: "User successfully deleted" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}