import { MysqlCheckupRepository } from './mysqlRepoCheckup';
//import { AMQPLIBRepository } from '../../broker/infrastructure/amqplibRepository';
//import { SendMessageService } from '../../broker/application/sendMessage';

import { CreateCheckupService } from '../application/createCheckupService';
import { GetCheckupService } from '../application/getCheckupService';

import { CreateCheckupController } from './controllers/createCheckupController';
import { GetCheckupController } from './controllers/getCheckupController';

export const mysqlCheckupRepository = new MysqlCheckupRepository();
//export const ampqlibRepository = new AMQPLIBRepository('amqp//:localhost');
//export const sendMessageService = new SendMessageService(ampqlibRepository);

export const createCheckupService = new CreateCheckupService(mysqlCheckupRepository);
export const getCheckupService = new GetCheckupService(mysqlCheckupRepository);

export const createCheckupController = new CreateCheckupController(createCheckupService);
export const getCheckupController = new GetCheckupController(getCheckupService);