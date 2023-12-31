import { Router } from 'express';
import DashboardController from '../controller/dashboard';

const router = Router();

router.get('/', DashboardController.alldata);

export default router;
