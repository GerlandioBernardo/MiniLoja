import {prisma} from "../config/prisma.js";

export async function findByIdCartUser(userId: string){
    const userCart = await prisma.cart.findMany({
        where:{
            userId
        }
    })
    return userCart;
}

export async function deleteUser(id: string){
    const user = await prisma.user.delete({
        where:{
            id
        }
    })
    return user;
}