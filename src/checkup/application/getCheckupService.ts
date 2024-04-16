import { CheckupRepository } from '../domain/repositories/checkupRepository';
import { Checkup } from '../domain/entities/checkup';

export class GetCheckupService {
    constructor(private readonly checkupRepository: CheckupRepository) { }

    async run(): Promise<Checkup[] | null> {
        try {
            const checkups = await this.checkupRepository.getAllCheckups();
            return checkups;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}