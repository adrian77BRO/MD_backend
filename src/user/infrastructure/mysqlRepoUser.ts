import { query } from '../../database/mysql';
import { User } from '../domain/entities/user';
import { UserRepository } from '../domain/repositories/userRepository';

export class MysqlUserRepository implements UserRepository {
    async getAllUsers(): Promise<User[] | null> {
        const sql = 'SELECT * FROM users'
        try {
            const [data]: any = await query(sql, []);
            const users = Object.values(JSON.parse(JSON.stringify(data)));
            return users.map(
                (user: any) => (
                    new User(
                        user.id,
                        user.username,
                        user.email,
                        user.password
                    )
                )
            );
        } catch (error) {
            return null;
        }
    }

    async getUserByEmail(email: string): Promise<User | null> {
        const sql = 'SELECT * FROM users WHERE email = ?';
        const params: any[] = [email];
        try {
            const [result]: any = await query(sql, params);
            return new User(
                result[0].id,
                result[0].username,
                result[0].email,
                result[0].password
            );;
        } catch (error) {
            return null;
        }
    }

    async createUser(
        username: string,
        email: string,
        password: string
    ): Promise<User | null> {
        const sql =
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        const params: any[] = [username, email, password];
        try {
            const [result]: any = await query(sql, params);
            return new User(result.insertId, username, email, password);
        } catch (error) {
            return null;
        }
    }
}