import { query } from '../../database/mysql';
import { Checkup } from '../domain/entities/checkup';
import { CheckupRepository } from '../domain/repositories/checkupRepository';

export class MysqlCheckupRepository implements CheckupRepository {
    async getAllCheckups(): Promise<Checkup[] | null> {
        const sql = 'SELECT * FROM checkup'
        try {
            const [data]: any = await query(sql, []);
            const checkups = Object.values(JSON.parse(JSON.stringify(data)));
            return checkups.map(
                (checkup: any) => (
                    new Checkup(
                        checkup.id,
                        checkup.patient,
                        checkup.heartRate,
                        checkup.spo2,
                        checkup.temperature
                    )
                )
            );
        } catch (error) {
            return null;
        }
    }

    async getCheckupById(id: number): Promise<Checkup | null> {
        const sql = 'SELECT * FROM checkup WHERE id = ?';
        const params: any[] = [id];
        try {
            const [result]: any = await query(sql, params);
            return new Checkup(
                result[0].id,
                result[0].patient,
                result[0].heartRate,
                result[0].spo2,
                result[0].temperature
            );
        } catch (error) {
            return null;
        }
    }

    async createCheckup(
        patient: string,
        heartRate: number,
        spo2: number,
        temperature: number
    ): Promise<Checkup | null> {
        const sql =
            'INSERT INTO checkup (patient, heartRate, spo2, temperature) VALUES (?, ?, ?, ?)';
        const params: any[] = [patient, heartRate, spo2, temperature];
        try {
            const [result]: any = await query(sql, params);
            return new Checkup(result.insertId, patient, heartRate, spo2, temperature);
        } catch (error) {
            return null;
        }
    }
}