import { Router } from 'express';
import UsersController from '../controller/users-controller';

const router = Router();

router.get('/', UsersController.list);
router.post('/delete', UsersController.delete);

export default router;
