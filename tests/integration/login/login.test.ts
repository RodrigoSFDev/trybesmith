import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import login  from '../../../src/service/user.service';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return a JWT token on successful login', async () => {

    // Faça uma solicitação de login usando chai-http
    const res = await chai.request(app).post('/login').send({
      username: 'Hagar',
      password: 'terrível',
    });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('token').to.equal('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJIYWdhciIsImlhdCI6MTY5NDcyMTU4M30.lL3CujV0iQR6KbPIRozwaXKYtSVUvBgcAdnmQxmF5c0');
  });

});
