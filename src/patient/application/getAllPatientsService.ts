import { Patient } from '../domain/entities/patient';
import { PatientRepository } from '../domain/repositories/patientRepository';

export class GetAllPatientsService {
    constructor(readonly patientRepository: PatientRepository) { }

    async run(): Promise<Patient[] | null> {
        try {
            const patients = await this.patientRepository.getAllPatients();
            return patients;
        } catch (error) {
            return null;
        }
    }
} 