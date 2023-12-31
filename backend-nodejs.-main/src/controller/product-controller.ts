import { Request, Response } from 'express';
const products: any[] = require('../../data/product.json');

const ProductController = {
    async list(req: Request, res: Response): Promise<void> {
        res.status(200).send({
            success: "true",
            data: products
        });
        return
    },
    async delete(req: Request, res: Response): Promise<void> {
        if(!req.body.hasOwnProperty('product_id')){
            res.status(203).send({
                success: "false",
                message : "Id Not Found"
            });
        }
        products.forEach((e:any, i: any) => {
            if(e.id == req.body.product_id) {
                products.splice(i,1)
            }
        })
        res.status(200).send({
            success: "true",
            message: "Successfully Deleted"
        });
        return
    },
};

export default ProductController;
