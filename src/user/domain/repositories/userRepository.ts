import { User } from '../entities/user';

export interface UserRepository {
    getAllUsers(): Promise<User[] | null>;
    getUserByEmail(email: string): Promise<User | null>;
    createUser(
        username: string,
        email: string,
        password: string
    ): Promise<User | null>;
}