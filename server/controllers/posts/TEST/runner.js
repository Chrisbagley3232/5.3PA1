process.env.NODE_ENV = 'test';

var base = process.env.PWD;
var config = require(base + '/config'),
  mongoose = require('mongoose'),
  posts = require(base + '/controller/posts'),
  Post = require(base + '/models/post'),
  should = require('should');

