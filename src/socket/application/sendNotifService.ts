import { SocketRepository } from '../domain/repositories/socketRepository';
import { Checkup } from '../../checkup/domain/entities/checkup';
import { Event } from '../domain/entities/event';

export class SendNotificationService {
    constructor(private readonly socketRepository: SocketRepository) { }
    
    async run(parameters: Checkup): Promise<void> {
        try {
            const notif: Checkup = {
                ...parameters
            }
            await this.socketRepository.notify(Event.sendData, notif);
        } catch (error: any) {
            throw new Error(error);
        }
    }
}