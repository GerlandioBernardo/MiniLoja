import type { CartResponse } from "../types/TypeCart";
import api from "./api";

export async function deleteUserAccount(){
    const response = await api.delete("/user", {data:{}})
    return  response;
}

// requisições para adicionar e remover produtos do carrinho
export async function addToCart(productId: string){
    const response = await api.post(`/user/cart/${productId}`, {data:{}});
    return response;
}
export async function deleteToCart(cartId: string, productId: string){
    const response = await api.delete(`/user/cart/${cartId}/${productId} `, {data:{}});
    return response;
};

export async function getUserCart(): Promise<CartResponse>{
    const response =  await api.get<CartResponse>("/user/cart");
    return response.data;
}