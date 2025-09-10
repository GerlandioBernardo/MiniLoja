import {Router} from "express";
import {deleteUser} from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const userRouter = Router();

userRouter.delete('/', authMiddleware, deleteUser);

export default userRouter;