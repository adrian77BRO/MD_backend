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
                        checkup.username,
                        checkup.heart_rate,
                        checkup.oxigen_sat,
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
                result[0].username,
                result[0].heart_rate,
                result[0].oxigen_sat,
                result[0].temperature
            );
        } catch (error) {
            return null;
        }
    }

    async createCheckup(
        username: string,
        heart_rate: number,
        oxigen_sat: number,
        temperature: number
    ): Promise<Checkup | null> {
        const sql =
            'INSERT INTO checkup (username, heart_rate, oxigen_sat, temperature) VALUES (?, ?, ?, ?)';
        const params: any[] = [username, heart_rate, oxigen_sat, temperature];
        try {
            const [result]: any = await query(sql, params);
            return new Checkup(result.insertId, username, heart_rate, oxigen_sat, temperature);
        } catch (error) {
            return null;
        }
    }
}