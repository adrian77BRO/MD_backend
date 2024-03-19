import { Request, Response } from 'express';
import { UpdatePatientService } from '../../application/updatePatientService';

export class UpdatePatientController {
    constructor(readonly updatePatientService: UpdatePatientService) { }

    async run(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        const data = req.body;
        try {
            const patient = await this.updatePatientService.run(
                id,
                data.name,
                data.last_name,
                data.age,
                data.sex
            );

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
                    msg: 'Paciente actualizado exitosamente'
                });
            } else {
                res.status(404).send({
                    status: 'error',
                    msg: 'El paciente no fue encontrado',
                });
            }
        } catch (error) {
            res.status(204).send({
                status: 'error',
                data: 'Error at update the patient',
                msg: error,
            });
        }
    }
}