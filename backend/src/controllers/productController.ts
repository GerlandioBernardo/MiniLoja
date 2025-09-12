import type {Request, Response} from "express";
import * as productService from "../services/productService.js";

export async function getProducts(req: Request, res:Response){
    try {
        const products = await productService.getProducts();

        if(!products){
            res.status(404).json({message: "Error when searching for products"});
            return;
        }
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}
