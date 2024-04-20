import { Router } from 'express';
import { createCheckupController, getCheckupController } from './checkupDependencies';
import { verifyToken } from '../../auth/application/middlewares/authMiddleware';

export const checkupRouter = Router();

checkupRouter.post('/', createCheckupController.run.bind(createCheckupController));
checkupRouter.get('/', verifyToken, getCheckupController.run.bind(getCheckupController));