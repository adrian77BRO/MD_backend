import { Patient } from '../entities/patient';

export interface PatientRepository {
    getAllPatients(): Promise<Patient[] | null>;
    getPatientById(id: number): Promise<Patient | null>;
    createPatient(
        name: string,
        last_name: string,
        age: number,
        sex: string
    ): Promise<Patient | null>;
    updatePatient(
        id: number,
        name: string,
        last_name: string,
        age: number,
        sex: string
    ): Promise<Patient | null>;
    deletePatient(id: number): Promise<boolean | null>;
}