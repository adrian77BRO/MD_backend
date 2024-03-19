import { CreatePatientService } from '../application/createPatientService';
import { CreatePatientController } from './controllers/createPatientController';
import { UpdatePatientService } from '../application/updatePatientService';
import { UpdatePatientController } from './controllers/updatePatientController';
import { DeletePatientService } from '../application/deletePatientService';
import { DeletePatientController } from './controllers/deletePatientController';

import { GetAllPatientsService } from '../application/getAllPatientsService';
import { GetAllPatientsController } from './controllers/getAllPatientsController';
import { GetPatientByIdService } from '../application/getPatientByIdService';
import { GetPatientByIdController } from './controllers/getPatientByIdController';

import { MysqlPatientRepository } from './mysqlRepoPatient';
export const mysqlPatientRepository = new MysqlPatientRepository();

export const createPatientService = new CreatePatientService(mysqlPatientRepository);
export const updatePatientService = new UpdatePatientService(mysqlPatientRepository);
export const deletePatientService = new DeletePatientService(mysqlPatientRepository);
export const getAllPatientsService = new GetAllPatientsService(mysqlPatientRepository);
export const getPatientByIdService = new GetPatientByIdService(mysqlPatientRepository);

export const createPatientController = new CreatePatientController(createPatientService);
export const updatePatientController = new UpdatePatientController(updatePatientService);
export const deletePatientController = new DeletePatientController(deletePatientService);
export const getAllPatientsController = new GetAllPatientsController(getAllPatientsService)
export const getPatientByIdController = new GetPatientByIdController(getPatientByIdService);