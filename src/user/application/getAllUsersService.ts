import { User } from '../domain/entities/user';
import { UserRepository } from '../domain/repositories/userRepository';

export class GetAllUsersService {
    constructor(readonly userRepository: UserRepository) { }
    
    async run(): Promise<User[] | null> {
        try {
            const result = await this.userRepository.getAllUsers();
            return result;
        } catch (error) {
            return null;
        }
    }
} 