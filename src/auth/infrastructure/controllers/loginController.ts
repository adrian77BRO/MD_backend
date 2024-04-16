import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { LoginService } from '../../application/services/loginService';
import { ComparePasswordService } from '../helpers/comparePassword';
import { secret } from '../../domain/constants/secret';

const compareCredentials = new ComparePasswordService();

export class LoginController {
    constructor(readonly loginService: LoginService) { }

    async run(req: Request, res: Response) {
        try {
            const credentials = req.body;
            const user = await this.loginService.run(
                credentials.email
            );
            if (!user) {
                res.status(404).json({
                    status: 'error',
                    msg: 'Correo incorrecto'
                });
                return;
            }

            const isPasswordValid = compareCredentials.comparePassword(
                credentials.password,
                user.password
            );
            if (!isPasswordValid) {
                res.status(401).json({
                    status: 'error',
                    msg: 'Contraseña incorrecta'
                });
                return;
            }

            const token = jwt.sign({ email: credentials.email }, secret, { expiresIn: '1h' });
            res.status(200).json({
                status: 'success',
                msg: 'Acceso exitoso al sistema',
                user,
                token
            });
        } catch (error) {
            return res.status(500).send({
                status: 'error',
                data: 'Error at login',
                msg: error,
            });
        }
    }
}