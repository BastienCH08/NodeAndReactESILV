import { Request, Response } from 'express';

interface CartItem {
    id: number;
    user_id: number;
    product_id: number;
}

const cart: CartItem[] = require('../../data/cart.json');
const products: any[] = require('../../data/product.json');
const orders: any[] = require('../../data/orders.json');

const OrdersController = {
    async add(req: Request, res: Response): Promise<void> {
        if (!req.body.hasOwnProperty('user_id') || !req.body.hasOwnProperty('products') || !req.body.hasOwnProperty('totalAmount')) {
            res.status(203).send({
                success: "false",
                message: 'Invalid input'
            });
            return;
        }

        const productsIds : [] = req.body.products
        if(productsIds.length == 0) {
            res.status(203).send({
                success: "false",
                message: 'No any Product'
            });
            return;
        }
        let orderProducts : any = []
        productsIds.forEach((e : any) => {
            products.forEach((e1,i1) => {
                if(e1.id == e) {
                    orderProducts.push(e1)
                }
            })
        })
        let value : any = {
            id : orders.length+1,
            userId : req.body.user_id,
            items :orderProducts.length + 1,
            products : orderProducts,
            status : "pending",
            totalAmount : (req.body.totalAmount).toFixed(2),
        }
        orders.push(value)
        cart.forEach((e : CartItem, i: number) => {
            if(e.user_id == req.body.user_id) {
                cart.splice(i,1)
            }
        })
        res.status(200).send({
            success: "true",
            data : value,
            message : "successfully"
        });
    },

    async userList(req: Request, res: Response): Promise<void> {
        if (!req.body.hasOwnProperty('user_id')) {
            res.status(203).send({
                success: "false",
                message: 'Invalid input'
            });
            return;
        }

        const userorders : any = [];
        orders.forEach((e: any) => {
            console.log(e.user_id)

            if (e.userId == req.body.user_id) {
                userorders.push(e);
            }
        });
        res.status(200).send({
            success: "true",
            data: userorders,
        });
    },
    async list(req: Request, res: Response): Promise<void> {
        res.status(200).send({
            success: "true",
            data: orders,
        });
        return
    },
    async status(req: Request, res: Response): Promise<void> {
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
    },
};

export default OrdersController;
