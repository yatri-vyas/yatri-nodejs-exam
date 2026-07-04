import { Router } from "express";
import userController from "../controllers/userController.js";
import validation from "../middlewares/validationMiddleware.js";

const userRouter = Router();

// register user
userRouter.post('/register', validation , userController.userRegistration);

// login user
userRouter.post('/login',userController.userLogin);

// get all user
userRouter.get('/get-all-user' , userController.getAllUser);

// get user by id
userRouter.get('/get-one-user/:id' , userController.getOneUser);

// delete user
userRouter.delete('/delete-user/:id',userController.userDelete);

// update user
userRouter.patch('/update-user/:id',userController.userUpdate);

export default userRouter;