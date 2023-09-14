import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { ServiceRresponse } from '../types/ServiceRes';
import { Product } from '../types/Product';

type FilterProduct = {
  id: number;
  name: string;
  price: string;
};

async function create(product: ProductInputtableTypes): Promise<ServiceRresponse<FilterProduct>> {
  const newProduct = await ProductModel.create(product);
  const filteredProduct = await ProductModel.findByPk(newProduct.dataValues.id, {
    attributes: { exclude: ['orderId'] },
  });
  if (!filteredProduct) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  return { status: 'SUCCESSFUL', data: filteredProduct.dataValues };
}

async function findAll(): Promise<Product[]> {
  const products = await ProductModel.findAll();
  return products.map((product) => product.toJSON()); 
}

export default {
  create,
  findAll,
};