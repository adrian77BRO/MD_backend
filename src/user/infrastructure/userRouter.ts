import express from 'express';
import { createUserController } from './userDependencies';
import { getUserByEmailController } from './userDependencies';
import { getAllUsersController } from './userDependencies';
import { verifyToken } from '../../auth/application/middlewares/authMiddleware';

export const userRouter = express.Router();

userRouter.get('/', verifyToken, getAllUsersController.run.bind(getAllUsersController));
userRouter.get('/:email', verifyToken, getUserByEmailController.run.bind(getUserByEmailController));
userRouter.post('/', createUserController.run.bind(createUserController));