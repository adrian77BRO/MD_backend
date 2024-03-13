import { MysqlUserRepository } from '../../user/infrastructure/mysqlRepoUser';
import { LoginService } from '../application/services/loginService';
import { LoginController } from './controllers/loginController';

export const mysqlRepository = new MysqlUserRepository();

export const loginService = new LoginService(mysqlRepository);
export const loginController = new LoginController(loginService);