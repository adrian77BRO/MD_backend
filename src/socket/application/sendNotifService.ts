import { SocketRepository } from '../domain/repositories/socketRepository';
import { CheckupInfo } from '../../checkup/domain/entities/checkupInfo';
import { Event } from '../domain/entities/events';

export class SendNotificationService {
    constructor(private readonly socketRepository: SocketRepository) { }

    async run(
        heartRate: number,
        spo2: number,
        temperature: number
    ): Promise<void> {
        try {
            const notif: CheckupInfo = {
                heartRate,
                spo2,
                temperature
            }
            await this.socketRepository.notify(Event.sendData, notif);
        } catch (error: any) {
            throw new Error(error);
        }
    }
}