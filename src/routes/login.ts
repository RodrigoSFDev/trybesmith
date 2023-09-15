import { Router } from 'express';
import loginController from '../controller/user.controller';
import loginValidationMiddleware from '../middlewares/validation.login';

const router = Router();

router.post('/', loginValidationMiddleware, loginController.login);

export default router;