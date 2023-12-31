import { Request, Response } from 'express';

interface CartItem {
    id: number;
    user_id: number;
    product_id: number;
}

const cart: CartItem[] = require('../../data/cart.json');
const products: any[] = require('../../data/product.json');

const CartController = {
    async add(req: Request, res: Response): Promise<void> {
        if (!req.body.hasOwnProperty('user_id') || !req.body.hasOwnProperty('product_id')) {
            res.status(203).send({
                success: "false",
                message: 'Invalid input'
            });
            return;
        }

        const value: CartItem = {
            id: cart.length + 1,
            user_id: req.body.user_id,
            product_id: req.body.product_id
        };

        cart.push(value);
        console.log(cart);

        res.status(200).send({
            success: "true",
        });
    },

    async list(req: Request, res: Response): Promise<void> {
        if (!req.body.hasOwnProperty('user_id')) {
            res.status(203).send({
                success: "false",
                message: 'Invalid input'
            });
            return;
        }

        const data_ids: number[] = [];
        cart.forEach((e: CartItem) => {
            if (e.user_id == req.body.user_id) {
                data_ids.push(e.product_id);
            }
        });

        const data: any[] = [];
        let t_a = 0;

        data_ids.forEach((e: number) => {
            products.forEach((e1: any) => {
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
    },

    async delete(req: Request, res: Response): Promise<void> {
        if (!req.body.hasOwnProperty('user_id') || !req.body.hasOwnProperty('product_id')) {
            res.status(203).send({
                success: "false",
                message: 'Invalid input'
            });
            return;
        }

        cart.forEach((e: CartItem, i: number) => {
            if (e.product_id == req.body.product_id && e.user_id == req.body.user_id) {
                cart.splice(i, 1);
            }
        });

        res.status(200).send({
            success: "true",
        });
    },
};

export default CartController;
