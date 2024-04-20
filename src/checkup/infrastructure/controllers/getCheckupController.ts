import { Request, Response } from 'express';
import { GetCheckupService } from '../../application/getCheckupService';

export class GetCheckupController {
    constructor(private readonly getCheckupService: GetCheckupService) { }

    async run(req: Request, res: Response) {
        try {
            const checkups = await this.getCheckupService.run();

            if (checkups) {
                res.status(200).send({
                    status: 'success',
                    checkups: checkups.map((checkup: any) => {
                        return {
                            heartRate: checkup.heartRate,
                            spo2: checkup.spo2,
                            temperature: checkup.temperature
                        };
                    }),
                })
            } else {
                res.status(400).send({
                    status: 'error',
                    msg: 'Checkups not founded',
                })
            };
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}