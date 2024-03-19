import { PatientRepository } from '../domain/repositories/patientRepository';

export class DeletePatientService {
    constructor(readonly patientRepository: PatientRepository) { }

    async run(id: number): Promise<boolean | null> {
        try {
            const patient = await this.patientRepository.getPatientById(id);
            if (patient) {
                return await this.patientRepository.deletePatient(id);
            }
            return false;
        } catch (error) {
            return null;
        }
    }
}