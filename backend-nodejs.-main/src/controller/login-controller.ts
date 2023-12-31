import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
const config = require('../../data/api.json');
const users: any[] = require('../../data/users.json');

interface User {
    email: string;
    password: string;
    role: string;
}

const createToken = async (user: User): Promise<string> => {
    const user_token = {
        email: user.email,
        role: user.role
    };
    const token = await jwt.sign(user_token, config.api.jwt_secret, { expiresIn: '100d' });
    return token;
};

const LoginController = {
    async login(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        if (!req.body.hasOwnProperty('email') || !req.body.hasOwnProperty('password')) {
            res.status(201).send({
                success: false,
                message: 'Email And Password Both are required'
            });
            return;
        }
        const email: string = req.body.email;
        const password: string = req.body.password;
        let user_index: number = -1;
        
        users.forEach((user: User, i: number) => {
            if (email === user.email && password === user.password) {
                user_index = i;
            }
        });

        if (user_index === -1) {
            res.status(201).send({
                success: false,
                message: 'Email Or Password is Incorrect'
            });
            return;
        }
        
        const token: string = await createToken(users[user_index]);
        res.status(200).send({
            success: true,
            message: 'Successfully Login',
            data: users[user_index],
            token: token
        });
    },
};

export default LoginController;
