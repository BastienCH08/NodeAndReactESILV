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
const cart = require('../../data/cart.json');
const products = require('../../data/product.json');
const CartController = {
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.hasOwnProperty('user_id') || !req.body.hasOwnProperty('product_id')) {
                res.status(203).send({
                    success: "false",
                    message: 'Invalid input'
                });
                return;
            }
            const value = {
                id: cart.length + 1,
                user_id: req.body.user_id,
                product_id: req.body.product_id
            };
            cart.push(value);
            console.log(cart);
            res.status(200).send({
                success: "true",
            });
        });
    },
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.hasOwnProperty('user_id')) {
                res.status(203).send({
                    success: "false",
                    message: 'Invalid input'
                });
                return;
            }
            const data_ids = [];
            cart.forEach((e) => {
                if (e.user_id == req.body.user_id) {
                    data_ids.push(e.product_id);
                }
            });
            const data = [];
            let t_a = 0;
            data_ids.forEach((e) => {
                products.forEach((e1) => {
                    if (e1.id == e) {
                        data.push(e1);
                        t_a += e1.price;
                    }
                });
            });
            res.status(200).send({
                success: "true",
                data: data,
                totalAmount: t_a
            });
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.hasOwnProperty('user_id') || !req.body.hasOwnProperty('product_id')) {
                res.status(203).send({
                    success: "false",
                    message: 'Invalid input'
                });
                return;
            }
            cart.forEach((e, i) => {
                if (e.product_id == req.body.product_id && e.user_id == req.body.user_id) {
                    cart.splice(i, 1);
                }
            });
            res.status(200).send({
                success: "true",
            });
        });
    },
};
exports.default = CartController;
