import type { Request, Response, NextFunction } from "express";
import * as cartService from "../services/cartService.js";
import type { AuthRequest } from "../types/auth.js";

export async function addToCart(req: AuthRequest, res: Response, nex: NextFunction) {
    try {
        const { productId } = req.params
        const id = req.user?.id;
        const userId = id;

        if (!productId) return;
        if (!userId) return;

        const existsProduct = await cartService.findProductById(userId, productId);

        if (existsProduct) {
            res.status(409).json({ message: "Product already added to cart" });
            return;
        }

        const updateStockProduct = await cartService.updateStockProduct(productId, 1);

        if (typeof updateStockProduct === "string") {
            res.status(400).json({ message: updateStockProduct });
            return;
        }

        const cart = await cartService.addToCart({ userId, productId });

        return res.status(201).json({
            message: "Product added to cart successfully",
            cart,
            updateStockProduct
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function deleteToCart(req: AuthRequest, res: Response) {
    try {
        const { cartId, productId } = req.params;

        if (!cartId || !productId) return;

        const cart = await cartService.deleteToCart(cartId);

        if (!cart) {
            res.status(400).json({ message: "Error deleting cart" });
            return;
        }

        const updateStockProductDelete = await cartService.updateStockProductDelete(productId, 1);

        if (typeof updateStockProductDelete === "string") {
            res.status(400).json({ message: updateStockProductDelete });
            return;
        }
        res.status(200).json({ message: "Cart deleted successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function getUserCart(req: AuthRequest, res: Response) {
    try {
        const id = req.user?.id;
        const userId = id;

        if (!userId) return;

        const cart = await cartService.getUserCart(userId);

        if (cart.length === 0) {
            res.status(200).json({ message: "Empty cart" });
            return;
        }

        res.status(200).json({
            cart
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}