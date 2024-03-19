import { Request, Response } from 'express';
import { GetPatientByIdService } from '../../application/getPatientByIdService';

export class GetPatientByIdController {
    constructor(readonly getPatientByIdService: GetPatientByIdService) { }

    async run(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const patient = await this.getPatientByIdService.run(id);

            if (patient) {
                res.status(200).send({
                    status: 'success',
                    patient: {
                        id: patient.id,
                        name: patient.name,
                        last_name: patient.last_name,
                        age: patient.age,
                        sex: patient.sex
                    },
                })
            } else {
                res.status(404).send({
                    status: 'error',
                    msg: 'Patient not founded',
                })
            };
        } catch (error) {
            res.status(500).send({
                status: 'error',
                data: 'Error at get the patient',
                msg: error,
            });
        }
    }
}