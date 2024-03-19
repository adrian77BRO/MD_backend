import { Request, Response } from 'express';
import { GetAllPatientsService } from '../../application/getAllPatientsService';

export class GetAllPatientsController {
    constructor(readonly getAllPatientsService: GetAllPatientsService) { }

    async run(req: Request, res: Response) {
        try {
            const patients = await this.getAllPatientsService.run();
            if (patients) {
                res.status(200).send({
                    status: 'success',
                    patients: patients.map((patient: any) => {
                        return {
                            id: patient.id,
                            name: patient.name,
                            last_name: patient.last_name,
                            age: patient.age,
                            sex: patient.sex
                        };
                    }),
                })
            } else {
                res.status(400).send({
                    status: 'error',
                    msg: 'Patients not founded',
                })
            };
        } catch (error) {
            res.status(204).send({
                status: 'error',
                data: 'Error at get all patients',
                msg: error,
            });
        }
    }
}