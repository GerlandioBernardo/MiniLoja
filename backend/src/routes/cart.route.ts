import {Router} from "express";
import {addToCart, deleteToCart, getUserCart} from "../controllers/cartController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const cartRouter = Router();

cartRouter.get("/", authMiddleware, getUserCart);
cartRouter.post("/:productId", authMiddleware, addToCart);
cartRouter.delete("/:cartId/:productId", authMiddleware, deleteToCart);


export default cartRouter;