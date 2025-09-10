import {Router} from "express";
import authRouter from "./auth.route.js";
import userRouter from "./user.route.js";

const rootRouter = Router();

rootRouter.use('/auth', authRouter);
rootRouter.use('/user', userRouter);

export default rootRouter;