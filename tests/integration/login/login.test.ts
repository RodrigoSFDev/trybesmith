import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';
import bcrypt from 'bcryptjs';


chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('faz login corretamente', async function() {
    const validLoginFromDB = { id: 1, username: 'Hagar', level: 10, vocation: 'Rougue', password: 'terrível' }
    const validLoginBody = { username: 'Hagar', password: 'terrível' }
    //Arrange
    const httpRequestBody = validLoginBody;
    sinon.stub(UserModel, 'findOne').resolves(UserModel.build(validLoginFromDB));
    sinon.stub(bcrypt, 'compare').resolves(true);
    //Act
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    //Assert
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.property('token')
  })

});
