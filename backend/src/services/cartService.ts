import {prisma} from "../config/prisma.js";
import type { typeCart } from "../types/typeCart.js";

export async function updateStockProduct(id: string, quantity: number){

    const product = await prisma.product.findFirst({
        where:{
            id
        }
    });

    if(!product){
        return "Product not found";
    }

    if(product.stock < quantity){
        return "Product not available in stock";
    }

    return await prisma.product.update({
        where:{
            id
        },
        data:{
            stock: {decrement: quantity}
        }
    })
}

export async function findProductById(userId: string, productId: string){
    const existsProduct =  await prisma.cart.findFirst({
        where:{ 
            userId,
            productId
        }
    })
    return existsProduct;
}

export async function addToCart({userId, productId}: typeCart){
    const cart = await prisma.cart.create({
        data:{
            userId,
            productId,
        }
    })
    return cart;
}


