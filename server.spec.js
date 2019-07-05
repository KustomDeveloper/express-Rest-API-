var request = require('supertest');
var app = require('./server.js');
var assert = require('chai').assert;

describe("The apps restful api", () => {
  it("should return an array of users", (done) => {
    request(app)
      .get('/users')
      .expect(200)
      .end((req, res) => {
        var contacts = res.body;
        assert.isArray(contacts);
        done();
      });
  })
})
