import { Router } from 'express';
import CartController from '../controller/cart-controller';
const router = Router();

router.post('/add', CartController.add);
router.post('/list', CartController.list);
router.post('/delete', CartController.delete);

export default router;
