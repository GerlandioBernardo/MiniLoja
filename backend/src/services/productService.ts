import {prisma} from "../config/prisma.js";

export async function getProducts(){
    return await prisma.product.findMany();
}