import {Router} from "express";
import {deleteUser} from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import cartRouter from "./cart.route.js";

const userRouter = Router();

userRouter.delete('/', authMiddleware, deleteUser);

// rotas para produtos
userRouter.use('/cart', cartRouter)

export default userRouter;