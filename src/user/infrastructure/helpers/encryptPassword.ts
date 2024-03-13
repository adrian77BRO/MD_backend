import bcrypt from 'bcrypt';
import { EncryptRepository } from '../../domain/repositories/encryptRepository';

export class EncryptPasswordService implements EncryptRepository {
    endecodePassword(password: string): string {
        const pass = bcrypt.hashSync(password, 10);
        return pass;
    }
}