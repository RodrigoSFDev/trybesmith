import express from 'express';
import createProduct from '../controller/products.controller';
import validations from '../middlewares/validations';

const router = express.Router();

router.post('/', validations.validateName, validations.validatePrice, createProduct.createProduct);
router.get('/', createProduct.findAllProducts);

export default router;