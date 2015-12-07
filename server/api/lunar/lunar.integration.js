'use strict';

var app = require('../..');
var request = require('supertest');

var newThing;

describe('Lunar API:', function() {

  describe('GET /api/lunar/:birth', function() {
    var birthday;

    beforeEach(function(done) {
      request(app)
        .get('/api/lunar/2014052312')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          birthday = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      birthday["干支"].should.equals("甲午己巳甲午庚午");
      birthday["五行"].should.equals("木火土火木火金火");
      birthday["方位"].should.equals("东南中南东南西南");
    });

  });

  describe('GET /api/lunar/word/:word', function() {
    var word;

    beforeEach(function(done) {
      request(app)
        .get('/api/lunar/word/康')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          word = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      console.log(word);
    });
  })

  // describe('POST /api/things', function() {
  //   beforeEach(function(done) {
  //     request(app)
  //       .post('/api/things')
  //       .send({
  //         name: 'New Thing',
  //         info: 'This is the brand new thing!!!'
  //       })
  //       .expect(201)
  //       .expect('Content-Type', /json/)
  //       .end(function(err, res) {
  //         if (err) {
  //           return done(err);
  //         }
  //         newThing = res.body;
  //         done();
  //       });
  //   });
  //
  //   it('should respond with the newly created thing', function() {
  //     newThing.name.should.equal('New Thing');
  //     newThing.info.should.equal('This is the brand new thing!!!');
  //   });
  //
  // });
  //
  // describe('GET /api/things/:id', function() {
  //   var thing;
  //
  //   beforeEach(function(done) {
  //     request(app)
  //       .get('/api/things/' + newThing._id)
  //       .expect(200)
  //       .expect('Content-Type', /json/)
  //       .end(function(err, res) {
  //         if (err) {
  //           return done(err);
  //         }
  //         thing = res.body;
  //         done();
  //       });
  //   });
  //
  //   afterEach(function() {
  //     thing = {};
  //   });
  //
  //   it('should respond with the requested thing', function() {
  //     thing.name.should.equal('New Thing');
  //     thing.info.should.equal('This is the brand new thing!!!');
  //   });
  //
  // });
  //
  // describe('PUT /api/things/:id', function() {
  //   var updatedThing
  //
  //   beforeEach(function(done) {
  //     request(app)
  //       .put('/api/things/' + newThing._id)
  //       .send({
  //         name: 'Updated Thing',
  //         info: 'This is the updated thing!!!'
  //       })
  //       .expect(200)
  //       .expect('Content-Type', /json/)
  //       .end(function(err, res) {
  //         if (err) {
  //           return done(err);
  //         }
  //         updatedThing = res.body;
  //         done();
  //       });
  //   });
  //
  //   afterEach(function() {
  //     updatedThing = {};
  //   });
  //
  //   it('should respond with the updated thing', function() {
  //     updatedThing.name.should.equal('Updated Thing');
  //     updatedThing.info.should.equal('This is the updated thing!!!');
  //   });
  //
  // });
  //
  // describe('DELETE /api/things/:id', function() {
  //
  //   it('should respond with 204 on successful removal', function(done) {
  //     request(app)
  //       .delete('/api/things/' + newThing._id)
  //       .expect(204)
  //       .end(function(err, res) {
  //         if (err) {
  //           return done(err);
  //         }
  //         done();
  //       });
  //   });
  //
  //   it('should respond with 404 when thing does not exist', function(done) {
  //     request(app)
  //       .delete('/api/things/' + newThing._id)
  //       .expect(404)
  //       .end(function(err, res) {
  //         if (err) {
  //           return done(err);
  //         }
  //         done();
  //       });
  //   });
  //
  // });

});
