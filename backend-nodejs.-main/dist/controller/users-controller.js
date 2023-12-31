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
Object.defineProperty(exports, "__esModule", { value: true });
const users = require('../../data/users.json');
const UsersController = {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).send({
                success: "true",
                data: users
            });
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.hasOwnProperty('user_id')) {
                res.status(203).send({
                    success: "false",
                    message: "Id Not Found"
                });
            }
            users.forEach((e, i) => {
                if (e.userId == req.body.user_id) {
                    users.splice(i, 1);
                }
            });
            res.status(200).send({
                success: "true",
                message: "Successfully User Deleted"
            });
        });
    },
};
exports.default = UsersController;
