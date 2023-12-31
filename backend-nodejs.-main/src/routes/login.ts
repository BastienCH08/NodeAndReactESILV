import { Router } from 'express';
import LoginController from '../controller/login-controller';

const router = Router();

router.post('/', LoginController.login);

export default router;
