import { Request, Response } from 'express';
const users: any[] = require('../../data/users.json');

const UsersController = {
    async list(req: Request, res: Response): Promise<void> {
        res.status(200).send({
            success: "true",
            data: users
        });
    },
    async delete(req: Request, res: Response): Promise<void> {
        if(!req.body.hasOwnProperty('user_id')){
            res.status(203).send({
                success: "false",
                message : "Id Not Found"
            });
        }
        users.forEach((e:any, i: any) => {
            if(e.userId == req.body.user_id) {
                users.splice(i,1)
            }
        })
        res.status(200).send({
            success: "true",
            message: "Successfully User Deleted"
        });
    },
};

export default UsersController;
