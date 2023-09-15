import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import { Product } from '../../../src/types/Product';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should create a new product', async function () {
    const newProduct = {
      name: 'Martelo de Thor',
      price: '30 peças de ouro',
      orderId: 4,
    };
    const response = await chai
      .request(app)
      .post('/products')
      .send(newProduct);

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('id');
    expect(response.body.name).to.equal(newProduct.name);
    expect(response.body.price).to.equal(newProduct.price);
  });

/*  it('should return status 201 and a product created', async function () {
    const productMock = { id: 1, name: 'Product 5', price: '150', orderId: 1 };
    const product = { name: 'Product 5', price: '150', orderId: 1 };
    const productSent = { id: 1, name: 'Product 5', price: '150'}
    sinon.stub(ProductModel, 'create').resolves(ProductModel.build(productMock));
    const response = await chai.request(app).post('/products').send(product);

    expect(response).to.have.status(201);
    expect(response.body).to.deep.equal(productSent);
  });
  it('should return an array of products', async function () {
    const productsMock: Product[] = [
      { id: 1, name: 'Product 1', price: '150', orderId: 1 },
      { id: 2, name: 'Product 2', price: '150', orderId: 1 },
    ];

    sinon.stub(ProductModel, 'findAll').resolves([
      ProductModel.build(productsMock[0]),
      ProductModel.build(productsMock[1]),
    ]);
    const response = await chai.request(app).get('/products');

    expect(response).to.have.status(200);
    expect(response.body).to.deep.equal(productsMock);
  });
 */
});
