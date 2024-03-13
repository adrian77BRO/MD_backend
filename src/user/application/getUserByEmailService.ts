import { User } from '../domain/entities/user';
import { UserRepository } from '../domain/repositories/userRepository';

export class GetUserByEmailService {
    constructor(readonly userRepository: UserRepository) { }

    async run(email: string): Promise<User | null> {
        try {
            const result = await this.userRepository.getUserByEmail(email);
            return result;
        } catch (error) {
            return null;
        }
    }
}