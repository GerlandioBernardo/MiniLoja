import {prisma} from "../config/prisma.js";

export async function deleteUser(id: string){
    const user = await prisma.user.delete({
        where:{
            id
        }
    })
    return user;
}