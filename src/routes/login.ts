import { Router } from 'express';
import loginController from '../controller/user.controller';

const router = Router();

router.post('/', loginController.login);

export default router;