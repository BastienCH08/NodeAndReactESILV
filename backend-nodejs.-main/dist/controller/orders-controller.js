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
const orders = require('../../data/orders.json');
const OrdersController = {
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.hasOwnProperty('user_id') || !req.body.hasOwnProperty('products') || !req.body.hasOwnProperty('totalAmount')) {
                res.status(203).send({
                    success: "false",
                    message: 'Invalid input'
                });
                return;
            }
            const productsIds = req.body.products;
            if (productsIds.length == 0) {
                res.status(203).send({
                    success: "false",
                    message: 'No any Product'
                });
                return;
            }
            let orderProducts = [];
            productsIds.forEach((e) => {
                products.forEach((e1, i1) => {
                    if (e1.id == e) {
                        orderProducts.push(e1);
                    }
                });
            });
            let value = {
                id: orders.length + 1,
                userId: req.body.user_id,
                items: orderProducts.length + 1,
                products: orderProducts,
                status: "pending",
                totalAmount: (req.body.totalAmount).toFixed(2),
            };
            orders.push(value);
            cart.forEach((e, i) => {
                if (e.user_id == req.body.user_id) {
                    cart.splice(i, 1);
                }
            });
            res.status(200).send({
                success: "true",
                data: value,
                message: "successfully"
            });
        });
    },
    userList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.hasOwnProperty('user_id')) {
                res.status(203).send({
                    success: "false",
                    message: 'Invalid input'
                });
                return;
            }
            const userorders = [];
            orders.forEach((e) => {
                console.log(e.user_id);
                if (e.userId == req.body.user_id) {
                    userorders.push(e);
                }
            });
            res.status(200).send({
                success: "true",
                data: userorders,
            });
        });
    },
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).send({
                success: "true",
                data: orders,
            });
            return;
        });
    },
    status(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.hasOwnProperty('user_id') || !req.body.hasOwnProperty('product_id')) {
                res.status(203).send({
                    success: "false",
                    message: 'Invalid input'
                });
                return;
            }
            res.status(200).send({
                success: "true",
            });
        });
    },
};
exports.default = OrdersController;
