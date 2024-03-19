import { Patient } from '../domain/entities/patient';
import { PatientRepository } from '../domain/repositories/patientRepository';

export class GetPatientByIdService {
    constructor(readonly patientRepository: PatientRepository) { }

    async run(id: number): Promise<Patient | null> {
        try {
            const patient = await this.patientRepository.getPatientById(id);
            return patient;
        } catch (error) {
            return null;
        }
    }
}