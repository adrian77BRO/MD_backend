import { Request, Response } from 'express';
import { CreateUserService } from '../../application/createUserService';
import { EncryptPasswordService } from '../helpers/encryptPassword';
import { validateEmail, validatePassword } from '../../domain/userValidator';
import { MysqlUserRepository } from '../mysqlRepoUser';
//import { NodemailerEmailService } from '../helpers/sendNotifEmail';

const encryptPassword = new EncryptPasswordService();
const existingEmail = new MysqlUserRepository();
//const emailService = new NodemailerEmailService();

export class CreateUserController {
    constructor(readonly createUserService: CreateUserService) { }

    async run(req: Request, res: Response) {
        try {
            const data = req.body;
            if (!validateEmail(data.email)) {
                res.status(401).json({
                    status: 'error',
                    msg: 'Correo electrónico inválido',
                });
                return;
            } else if (!validatePassword(data.password)) {
                res.status(401).json({
                    status: 'error',
                    msg: 'La contraseña debe tener más de 6 caracteres',
                });
                return;
            } else {
                const existingUser = await existingEmail.getUserByEmail(data.email);
                if (existingUser) {
                    res.status(401).json({
                        status: 'error',
                        msg: 'El correo ya ha sido registrado',
                    });
                    return;
                } else {
                    const hashedPassword = encryptPassword.endecodePassword(data.password);

                    const user = await this.createUserService.run(
                        data.username,
                        data.email,
                        hashedPassword
                    );
                    //await emailService.sendWelcomeEmail(data.email, data.username);

                    if (user) {
                        res.status(200).send({
                            status: 'success',
                            data: {
                                id: user?.id,
                                username: user?.username,
                                email: user?.email,
                                password: user?.password
                            },
                            msg: 'Se ha registrado exitosamente al sistema'
                        })
                    } else {
                        res.status(204).send({
                            status: 'error',
                            msg: 'User not created',
                        });
                    };
                }
            }
        } catch (error) {
            res.status(500).send({
                status: 'error',
                data: 'Error at create user',
                msg: error,
            });
        }
    }
}