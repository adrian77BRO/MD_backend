import { CheckupRepository } from '../domain/repositories/checkupRepository';
import { SendNotificationService } from '../../socket/application/sendNotifService';
import { Checkup } from '../domain/entities/checkup';

export class CreateCheckupService {
    constructor(private readonly checkupRepository: CheckupRepository,
        private readonly sendNotificationService: SendNotificationService,
    ) { }
    async run(
        heartRate: number,
        spo2: number,
        temperature: number
    ): Promise<Checkup | null> {
        try {
            const checkup = await this.checkupRepository.createCheckup(
                heartRate,
                spo2,
                temperature
            );
            await this.sendNotificationService.run(heartRate, spo2, temperature);
            return checkup;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}