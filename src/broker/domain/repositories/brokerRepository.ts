import { QueueRequest } from '../entities/queueRequest';

export interface BrokerRepository {
    connection(): Promise<any>;
    createChannel(): Promise<any>;
    publish(req: QueueRequest): Promise<void>;
}