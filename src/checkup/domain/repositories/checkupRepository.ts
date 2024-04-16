import { Checkup } from '../entities/checkup';

export interface CheckupRepository {
    getAllCheckups(): Promise<Checkup[] | null>;
    getCheckupById(id: number): Promise<Checkup | null>;
    createCheckup(
        patient: string,
        heartRate: number,
        spo2: number,
        temperature: number
    ): Promise<Checkup | null>;
}