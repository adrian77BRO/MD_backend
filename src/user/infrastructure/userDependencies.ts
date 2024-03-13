import { CreateUserService } from '../application/createUserService';
import { CreateUserController } from './controllers/createUserController';
import { GetAllUsersService } from '../application/getAllUsersService';
import { GetAllUsersController } from './controllers/getAllUsersController';
import { GetUserByEmailService } from '../application/getUserByEmailService';
import { GetUserByEmailController } from './controllers/getUserByEmailController';
import { MysqlUserRepository } from './mysqlRepoUser';

export const mysqlUserRepository = new MysqlUserRepository();

export const createUserService = new CreateUserService(mysqlUserRepository);
export const getAllUsersService = new GetAllUsersService(mysqlUserRepository);
export const getUserByEmailService = new GetUserByEmailService(mysqlUserRepository);

export const createUserController = new CreateUserController(createUserService);
export const getAllUsersController = new GetAllUsersController(getAllUsersService)
export const getUserByEmailController = new GetUserByEmailController(getUserByEmailService);