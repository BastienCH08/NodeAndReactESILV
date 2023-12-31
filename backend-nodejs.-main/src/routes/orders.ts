import { Router } from 'express';
import OrdersController from '../controller/orders-controller';
const router = Router();

router.post('/add', OrdersController.add);
router.post('/user/list', OrdersController.userList);
router.get('/list', OrdersController.list);
router.post('/change-status', OrdersController.status);

export default router;
