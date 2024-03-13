import express from 'express';
import { loginController } from './authDependencies';

export const authRouter = express.Router();

authRouter.post('/', loginController.run.bind(loginController));