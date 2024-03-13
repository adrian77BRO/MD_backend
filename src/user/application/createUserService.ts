import { User } from '../domain/entities/user';
import { UserRepository } from '../domain/repositories/userRepository';

export class CreateUserService {
    constructor(readonly userRepository: UserRepository) { }

    async run(
        username: string,
        email: string,
        password: string
    ): Promise<User | null> {
        try {
            const user = await this.userRepository.createUser(
                username,
                email,
                password
            );
            return user;
        } catch (error) {
            return null
        }
    }
}