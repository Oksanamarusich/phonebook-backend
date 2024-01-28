import express from "express";
import userControllers from "../../controllers/userControllers.js";
import { userSchema, loginSchema  } from "../../schemas/userSchema.js";
import  validateBody from "../../decorators/validateBody.js";
import authenticate from "../../middlewares/checkToken.js"

const userRouter = express.Router();

userRouter.post("/signup", validateBody(userSchema), userControllers.signup);
userRouter.post('/login', validateBody(loginSchema), userControllers.login);
userRouter.post('/logout', authenticate, userControllers.logout);
userRouter.get('/current', authenticate, userControllers.currentUser);


export default userRouter;