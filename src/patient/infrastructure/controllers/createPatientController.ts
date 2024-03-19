import { Request, Response } from 'express';
import { CreatePatientService } from '../../application/createPatientService';

export class CreatePatientController {
    constructor(readonly createPatientService: CreatePatientService) { }

    async run(req: Request, res: Response) {
        const data = req.body;
        try {
            const patient = await this.createPatientService.run(
                data.name,
                data.last_name,
                data.age,
                data.sex
            );

            if (patient) {
                res.status(201).send({
                    status: 'success',
                    patient: {
                        id: patient?.id,
                        name: patient?.name,
                        last_name: patient?.last_name,
                        age: patient?.age,
                        sex: patient?.sex
                    },
                    msg: 'Paciente agregado exitosamente'
                });
            } else {
                res.status(204).send({
                    status: 'error',
                    msg: 'Patient not created',
                });
            }
        } catch (error) {
            res.status(204).send({
                status: 'error',
                data: 'Error at create patient',
                msg: error,
            });
        }
    }
}