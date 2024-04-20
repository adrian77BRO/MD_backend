import { Request, Response } from 'express';
import { CreateCheckupService } from '../../application/createCheckupService';

export class CreateCheckupController {
    constructor(private readonly createCheckupService: CreateCheckupService) { }

    async run(req: Request, res: Response) {
        try {
            const data = req.body;
            const checkup = await this.createCheckupService.run(
                data.heartRate,
                data.spo2,
                data.temperature
            );
            if (checkup) {
                return res.status(201).send({
                    status: 'success',
                    checkup: {
                        heartRate: checkup?.heartRate,
                        spo2: checkup?.spo2,
                        temperature: checkup?.temperature
                    },
                    msg: 'Monitoreo agregado exitosamente'
                });
            } else {
                res.status(204).send({
                    status: 'error',
                    msg: 'Checkup not created',
                });
            }
        } catch (error: any) {
            console.log(error.message);
            return res.status(500).send(error);
        }
    }
}