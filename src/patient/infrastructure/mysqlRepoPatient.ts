import { query } from '../../database/mysql';
import { Patient } from '../domain/entities/patient';
import { PatientRepository } from '../domain/repositories/patientRepository';

export class MysqlPatientRepository implements PatientRepository {
    async getAllPatients(): Promise<Patient[] | null> {
        const sql = 'SELECT * FROM patients'
        try {
            const [data]: any = await query(sql, []);
            const patients = Object.values(JSON.parse(JSON.stringify(data)));
            return patients.map(
                (patient: any) => (
                    new Patient(
                        patient.id,
                        patient.name,
                        patient.last_name,
                        patient.age,
                        patient.sex
                    )
                )
            );
        } catch (error) {
            return null;
        }
    }

    async getPatientById(id: number): Promise<Patient | null> {
        const sql = 'SELECT * FROM patients WHERE id = ?';
        const params: any[] = [id];
        try {
            const [patient]: any = await query(sql, params);
            return new Patient(
                patient[0].id,
                patient[0].name,
                patient[0].last_name,
                patient[0].age,
                patient[0].sex
            );;
        } catch (error) {
            return null;
        }
    }

    async createPatient(
        name: string,
        last_name: string,
        age: number,
        sex: string
    ): Promise<Patient | null> {
        const sql = 'INSERT INTO patients (name, last_name, age, sex) VALUES (?, ?, ?, ?)';
        const params: any[] = [name, last_name, age, sex];
        try {
            const [patient]: any = await query(sql, params);
            return new Patient(patient.insertId, name, last_name, age, sex);
        } catch (error) {
            return null;
        }
    }

    async updatePatient(
        id: number,
        name: string,
        last_name: string,
        age: number,
        sex: string
    ): Promise<Patient | null> {
        const sql = 'UPDATE patients SET name = ?, last_name = ?, age = ?, sex = ? WHERE id = ?';
        const params: any[] = [name, last_name, age, sex, id];
        try {
            const [patient]: any = await query(sql, params);
            return new Patient(id, name, last_name, age, sex);
        } catch (error) {
            return null;
        }
    }

    async deletePatient(id: number): Promise<boolean | null> {
        const sql = 'DELETE FROM patients WHERE id = ?';
        const params: any[] = [id];
        try {
            const [patient]: any = await query(sql, params);
            return true;
        } catch (error) {
            return false;
        }
    }
}