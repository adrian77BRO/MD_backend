import { Request, Response } from 'express';
import { DeletePatientService } from '../../application/deletePatientService';

export class DeletePatientController {
    constructor(readonly deletePatientService: DeletePatientService) { }

    async run(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const isDeleted = await this.deletePatientService.run(id);

            if (isDeleted) {
                res.status(200).send({
                    status: 'success',
                    msg: 'Paciente eliminado exitosamente',
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
                data: 'Error at delete the patient',
                msg: error,
            });
        }
    }
}