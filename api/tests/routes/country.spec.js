/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentine',
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true }))
    // .then(() => Country.create(pokemon)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it('should content to be type JSON', ()=>{
      agent.get('/countries').expect('content-type', /json/)
    })
  });
  describe('GET /countries:id', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it('should content to be type JSON', ()=>{
      agent.get('/countries').expect('content-type', /json/)
    })
  });
  describe("GET /countries?name=param", () => {
    // it('should get 200', () =>
    //   agent.get("/countries?name=param").expect(200)
    // );
    it('should content to be type JSON', ()=>{
      agent.get('/countries?name=can').expect('content-type', /json/)
    })
  });
});

