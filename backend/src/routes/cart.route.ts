import {Router} from "express";
import {addToCart, deleteToCart} from "../controllers/cartController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const cartRouter = Router();

cartRouter.post("/:productId", authMiddleware, addToCart);
cartRouter.delete("/:cartId", authMiddleware, deleteToCart);

export default cartRouter;