import { Request, Response } from 'express';
import ServiceProduct from '../service/product.service';
import { ProductInputtableTypes } from '../database/models/product.model';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;
  const serviceResponse = await ServiceProduct
    .create({ name, price, orderId } as ProductInputtableTypes);
  return res.status(201).json(serviceResponse.data);
}

async function findAllProducts(req: Request, res: Response): Promise<Response> {
  const products = await ServiceProduct.findAll();
  return res.status(200).json(products);
}

export default {
  createProduct,
  findAllProducts,
};