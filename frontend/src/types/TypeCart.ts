import type {Product} from "./TypeProduct"
export type Cart = {
    id: string;
    userId: string;
    productId: string;
    product: Product

}

export type CartResponse = {
    cart: Cart[];
}
