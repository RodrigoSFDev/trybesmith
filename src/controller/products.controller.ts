import { Request, Response } from 'express';
// criar o controller para o produto  em typescript, em node
import ServiceProduct from '../service/product.service';
import { ProductInputtableTypes } from '../database/models/product.model';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;
  const serviceResponse = await ServiceProduct
    .create({ name, price, orderId } as ProductInputtableTypes);
  return res.status(201).json(serviceResponse.data);
}

export default { createProduct };