import { Router } from 'express';
import ProductController from '../controller/product-controller';

const router = Router();

router.get('/', ProductController.list);
router.post('/delete', ProductController.delete);

export default router;
