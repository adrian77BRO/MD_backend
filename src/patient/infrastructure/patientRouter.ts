import express from 'express';
import { createPatientController } from './patientDependencies';
import { deletePatientController } from './patientDependencies';
import { updatePatientController } from './patientDependencies';
import { getPatientByIdController } from './patientDependencies';
import { getAllPatientsController } from './patientDependencies';
import { verifyToken } from '../../auth/application/middlewares/authMiddleware';

export const patientRouter = express.Router();

patientRouter.get('/', verifyToken, getAllPatientsController.run.bind(getAllPatientsController));
patientRouter.get('/:id', verifyToken, getPatientByIdController.run.bind(getPatientByIdController));
patientRouter.post('/', verifyToken, createPatientController.run.bind(createPatientController));
patientRouter.delete('/:id', verifyToken, deletePatientController.run.bind(deletePatientController));
patientRouter.put('/:id', verifyToken, updatePatientController.run.bind(updatePatientController));