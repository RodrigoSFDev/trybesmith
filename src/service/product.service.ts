import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { ServiceRresponse } from '../types/ServiceRes';

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

export default {
  create,
};