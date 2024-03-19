import { Checkup } from '../entities/checkup';

export interface CheckupRepository {
    getAllCheckups(): Promise<Checkup[] | null>;
    getCheckupById(id: number): Promise<Checkup | null>;
    createCheckup(
        username: string,
        heart_rate: number,
        oxigen_sat: number,
        temperature: number
    ): Promise<Checkup | null>;
}