import express from 'express';
import createProduct from '../controller/products.controller';
import validations from '../middlewares/validations';

const router = express.Router();

router.post('/', createProduct.createProduct, validations.validateName, validations.validatePrice);
router.get('/', createProduct.findAllProducts);

export default router;