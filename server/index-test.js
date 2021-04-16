const { assert } = require('console');
var should = require('should'), 
request = require('request');
    
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
    
const app = require("./server");

/* Globals */
var listings;

/*
  Describe blocks organize your unit tests into distinct categories of functionality.
  
  They can be nested.
 */
describe('UF Directory Server Unit Tests', function() {
 
  describe('Server responds to requests', function() {
    it('should respond', function(done) {
      /*
        The request module allows us to make HTTP requests. This module could also be useful in 
        making API calls to web services you make use of in your application, such as Google Maps. 
       */
      chai.request(app)
      .get("/")
      .end(function(error, response) {
      /*
          The 'should' module is an assertion library. Assertions allow us to compare the functions
          that we are testing to the values we expect to receive back. 
          
          In this unit test we are only testing the existence of a response, and are not concerned 
          with what is contained in the response. We can view this as a very general, binary check, not specific. 

        */
        should.exist(response);
       done();
         
      });
    });
  });

  	// For this test, let's use make primitive value comparisons
    it('responds with a 404 error to other GET requests', function(done) {
      chai.request(app)
      .get("/pizza")
      .end(function(error, response) {
      	// First, assert that the status code is what it's supposed to be (exactly 404) if the listing were missing.
       should.deepEqual(response.statusCode,404)    
        // For the last assertion, check that the string output is the same message server.js outputs when a listing is missing:
        // Finally, call "done();" to finish!

        done();
    });
  });  
});
