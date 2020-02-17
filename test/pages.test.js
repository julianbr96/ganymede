const expect = require('chai').expect;
const request = require('request');

it('main page should return serverStatus : "Ok"', done => {
  request.get('http://localhost:3000', { json: true }, (error, res, body) => {
    if (error) {
      console.error('ERROR: ', error);
    } else {
      expect(body.serverStatus).to.equal('Ok');
      done();
    }
  });
});
