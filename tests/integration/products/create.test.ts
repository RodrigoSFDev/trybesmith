import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

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

});
