const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../server');
const searchOrder = require('./resources/search-data.json');

chai.use(chaiHttp);
describe('GET /', () => {
  it('should have status 200', async done => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('should response with serverStatus = "Ok"', async done => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.serverStatus).to.equal('Ok');
        done();
      });
  });
});
describe('POST /api/product/search', () => {
  it('should save search order correctly and have status 201', async done => {
    chai
      .request(server)
      .post('/api/product/search')
      .send(searchOrder)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(201);
        expect(res.body.status).to.be.equal('Successful');
        done();
      });
  });
});
