import { Patient } from '../domain/entities/patient';
import { PatientRepository } from '../domain/repositories/patientRepository';

export class CreatePatientService {
    constructor(readonly patientRepository: PatientRepository) { }

    async run(
        name: string,
        last_name: string,
        age: number,
        sex: string
    ): Promise<Patient | null> {
        try {
            const patient = await this.patientRepository.createPatient(
                name,
                last_name,
                age,
                sex
            );
            return patient;
        } catch (error) {
            return null
        }
    }
}