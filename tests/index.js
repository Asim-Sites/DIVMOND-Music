const app = require('../server');
const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const agent = chai.request.agent(app);

it('should return /index page', (done) => { // research done callback
    chai.request(app)
        .get('/')
        .then(function(res) {
            expect(res).to.have.status(200)
            return done();
        })
        .catch(err => done(err))
});