const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../src/app');

chai.use(chaiHttp);
describe('GET /', () => {
  it('should have status 200', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        res.should.have.status(200);
        done();
      });
  });
  it('should response with serverStatus = "Ok"', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.serverStatus).to.equal('Ok');
        done();
      });
  });
});
