"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config = require('../../data/api.json');
const users = require('../../data/users.json');
const createToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const user_token = {
        email: user.email,
        role: user.role
    };
    const token = yield jsonwebtoken_1.default.sign(user_token, config.api.jwt_secret, { expiresIn: '100d' });
    return token;
});
const LoginController = {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            if (!req.body.hasOwnProperty('email') || !req.body.hasOwnProperty('password')) {
                res.status(201).send({
                    success: false,
                    message: 'Email And Password Both are required'
                });
                return;
            }
            const email = req.body.email;
            const password = req.body.password;
            let user_index = -1;
            users.forEach((user, i) => {
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
            const token = yield createToken(users[user_index]);
            res.status(200).send({
                success: true,
                message: 'Successfully Login',
                data: users[user_index],
                token: token
            });
        });
    },
};
exports.default = LoginController;
