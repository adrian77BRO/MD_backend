import { MysqlCheckupRepository } from './mysqlRepoCheckup';
import { SocketIORepository } from '../../socket/infrastructure/socketIORepository';
import { SendNotificationService } from '../../socket/application/sendNotifService';

import { CreateCheckupService } from '../application/createCheckupService';
import { GetCheckupService } from '../application/getCheckupService';

import { CreateCheckupController } from './controllers/createCheckupController';
import { GetCheckupController } from './controllers/getCheckupController';

export const mysqlCheckupRepository = new MysqlCheckupRepository();
export const socketIORepository = new SocketIORepository('http://54.84.1.3:8080/');
export const sendNotificationService = new SendNotificationService(socketIORepository);

export const createCheckupService = new CreateCheckupService(mysqlCheckupRepository, sendNotificationService);
export const getCheckupService = new GetCheckupService(mysqlCheckupRepository);

export const createCheckupController = new CreateCheckupController(createCheckupService);
export const getCheckupController = new GetCheckupController(getCheckupService);