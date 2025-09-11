import {Router} from "express";
import {addToCart} from "../controllers/cartController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const cartRouter = Router();

cartRouter.post("/:productId", authMiddleware, addToCart);

export default cartRouter;