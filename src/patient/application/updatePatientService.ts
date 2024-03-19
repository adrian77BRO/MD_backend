import { Patient } from '../domain/entities/patient';
import { PatientRepository } from '../domain/repositories/patientRepository';

export class UpdatePatientService {
    constructor(readonly patientRepository: PatientRepository) { }

    async run(
        id: number,
        name: string,
        last_name: string,
        age: number,
        sex: string
    ): Promise<Patient | null> {
        try {
            const patient = await this.patientRepository.getPatientById(id);
            if (patient) {
                return await this.patientRepository.updatePatient(
                    id,
                    name,
                    last_name,
                    age,
                    sex
                );
            }
            return null;
        } catch (error) {
            return null
        }
    }
}