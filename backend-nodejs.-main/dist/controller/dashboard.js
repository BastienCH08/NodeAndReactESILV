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
const products = require('../../data/product.json');
const orders = require('../../data/orders.json');
const DashboardController = {
    alldata(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                users: users.length,
                products: products.length,
                orders: orders.length
            };
            res.status(200).send({
                success: true,
                data: data,
                message: "successfully"
            });
            return;
        });
    },
};
exports.default = DashboardController;
