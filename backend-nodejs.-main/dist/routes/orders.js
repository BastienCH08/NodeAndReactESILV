"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_controller_1 = __importDefault(require("../controller/orders-controller"));
const router = (0, express_1.Router)();
router.post('/add', orders_controller_1.default.add);
router.post('/user/list', orders_controller_1.default.userList);
router.get('/list', orders_controller_1.default.list);
router.post('/change-status', orders_controller_1.default.status);
exports.default = router;
