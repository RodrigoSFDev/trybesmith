import express from 'express';
import createProduct from '../controller/products.controller';

const router = express.Router();

router.post('/', createProduct.createProduct);

export default router;