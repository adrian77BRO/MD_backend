import { CheckupRepository } from '../domain/repositories/checkupRepository';
import { Checkup } from '../domain/entities/checkup';
//import { SendMessageService } from '../../broker/application/sendMessage';
//import { QueueName } from '../../broker/domain/entities/queueName';

export class CreateCheckupService {
    constructor(private readonly checkupRepository: CheckupRepository) { }
    async run(
        patient: string,
        heartRate: number,
        spo2: number,
        temperature: number
    ): Promise<Checkup | null> {
        try {
            const checkup = await this.checkupRepository.createCheckup(
                patient,
                heartRate,
                spo2,
                temperature
            );
            return checkup;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}