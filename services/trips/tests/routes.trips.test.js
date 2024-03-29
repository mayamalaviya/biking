process.env.NODE_ENV = 'test';

const chai = require('chai');

const should = chai.should();

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../src/app');
const knex = require('../src/db/connection');

describe('Trips API Routes', () => {
  beforeEach(() => {
    return knex.migrate.rollback()
    .then(() => { return knex.migrate.latest(); })
    .then(() => { return knex.seed.run(); });
  });

  afterEach(() => {
    return knex.migrate.rollback();
  });

  describe('GET /trips/ping', () => {
    it('should return "pong"', () => {
      chai.request(server)
      .get('/trips/ping')
      .end((err, res) => {
        res.type.should.eql('text/html');
        res.text.should.eql('pong');
      });
    });
  });

  describe('GET /trips/user', () => {
    it('should return saved trips', () => {
      chai.request(server)
      .get('/trips/user')
      .set('authorization', `Bearer foobar`)
      .end((err, res) => {
        res.type.should.equal('application/json');
        res.body.status.should.equal('success');
        res.body.data.should.be.a('array');
        res.body.data.length.should.equal(1);
        res.body.data[0].should.have.property('user_id');
        res.body.data[0].should.have.property('title');
        res.body.data[0].should.have.property('created_at');
      });
    });
  });

  describe('POST /trips', () => {
    it('should create a new trip', () => {
      chai.request(server)
      .post('/trips')
      .set('authorization', `Bearer foobar`)
      .send({ title: 'Jurrasic World' })
      .end((err, res) => {
        res.should.have.status(200);
        res.type.should.equal('application/json');
        res.body.should.be.a('object');
        res.body.status.should.equal('success');
        res.body.data.should.equal('Trip Added!');
        chai.request(server)
        .get('/trips/user')
        .set('authorization', `Bearer foobar`)
        .end((err, res) => {
          res.type.should.equal('application/json');
          res.body.status.should.equal('success');
          res.body.data.should.be.a('array');
          res.body.data.length.should.equal(2);
          res.body.data[1].title.should.eql('Jurrasic World');
        });
      });
    });
  });
});
