import type { Request, Response, NextFunction } from "express";
import * as cartService from "../services/cartService.js";

export async function addToCart(req: Request, res: Response, nex: NextFunction) {
    try {
        const {productId} = req.params
        const {id} = req.body;
        const userId = id;

        if(!productId) return;

        const existsProduct = await cartService.findProductById(userId, productId);

        if(existsProduct){
            res.status(409).json({message: "Product already added to cart"});
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
        res.status(500).json({message: "Internal Server Error"});
    }
}

export async function deleteToCart(req: Request, res:Response){
    try {
       const {cartId} = req.params;

       if(!cartId) return;

       const cart = await cartService.deleteToCart(cartId);

       if(!cart){
            res.status(400).json({message: "Error deleting cart"});
            return;
       }

       res.status(200).json({message: "Cart deleted successfully"});
        
    } catch (error) {
         console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}