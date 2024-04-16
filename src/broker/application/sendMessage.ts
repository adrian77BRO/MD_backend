import { QueueContent } from '../domain/entities/queueContent';
import { QueueName } from '../domain/entities/queueName';
import { QueueRequest } from '../domain/entities/queueRequest';
import { BrokerRepository } from '../domain/repositories/brokerRepository';

export class SendMessageService {
    constructor(private readonly brokerRepository: BrokerRepository) { }

    async run(queueName: QueueName, queueContent: QueueContent): Promise<any> {
        try {
            const queueRequest: QueueRequest = { queueName, content: queueContent };
            await this.brokerRepository.publish(queueRequest);
        } catch (error: any) {
            throw new Error(error);
        }
    }
}