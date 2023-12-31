import { Request, Response } from 'express';

const users: any[] = require('../../data/users.json');
const products: any[] = require('../../data/product.json');
const orders: any[] = require('../../data/orders.json');



const DashboardController = {
    async alldata(req: Request, res: Response): Promise<void> {
        const data = {
            users : users.length,
            products : products.length,
            orders : orders.length
        }
        res.status(200).send(
        {
            success : true,
            data : data,
            message : "successfully"
        }
       
    )
    return;
    },
};

export default DashboardController;
