import { Request, Response } from 'express';
import { CreateUserService } from '../../application/createUserService';
import { EncryptPasswordService } from '../helpers/encryptPassword';
//import { NodemailerEmailService } from '../helpers/sendNotifEmail';

const encryptPassword = new EncryptPasswordService();
//const emailService = new NodemailerEmailService();

export class CreateUserController {
    constructor(readonly createUserService: CreateUserService) { }

    async run(req: Request, res: Response) {
        const data = req.body;
        const hashedPassword = encryptPassword.endecodePassword(data.password);
        try {
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
                })
            } else {
                res.status(204).send({
                    status: 'error',
                    msg: 'User not created',
                })
            };
        } catch (error) {
            res.status(500).send({
                status: 'error',
                data: 'Error at create user',
                msg: error,
            });
        }
    }
}