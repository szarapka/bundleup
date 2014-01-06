var request = require('supertest');
var express = require('express');

var app = require('../app.js');

describe('GET', function() {
  it('reponds with a HTML page', function(done){
    request(app)
    .get('/')
    .expect(200, done);
  });
});

describe('GET', function() {
  it('responds with a HTML page', function(done){
    request(app)
    .get('/media')
    .expect(200, done);
  });
});

describe('GET', function() {
  it('responds with a HTML page', function(done){
    request(app)
    .get('/volunteer')
    .expect(200, done);
  });
});

describe('GET', function() {
  it('responds with a HTML page', function(done){
    request(app)
    .get('/team')
    .expect(200, done);
  });
});

describe('GET', function() {
  it('responds with a HTML page', function(done){
    request(app)
    .get('/cities')
    .expect(200, done);
  });
});