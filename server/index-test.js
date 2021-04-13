const { assert } = require('console');
var should = require('should'), 
    request = require('request');
    
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
    
const app = require("./index");

/* Globals */
var listings;

/*
  Describe blocks organize your unit tests into distinct categories of functionality.
  
  They can be nested.
 */
describe('UF Directory Server Unit Tests', function() {

  /*
    This before hook loads the JSON data to the listings variable, so that we can compare 
    the response to 'http://localhost:3000/listings' to the data we expect to recieve. 
   */
 
  describe('Server responds to requests', function() {
    it('should respond', function(done) {
      /*
        The request module allows us to make HTTP requests. This module could also be useful in 
        making API calls to web services you make use of in your application, such as Google Maps. 
       */
      console.log("here");
      chai.request(app)
      .get("/")
      .end(function(error, response) {
      /*
          The 'should' module is an assertion library. Assertions allow us to compare the functions
          that we are testing to the values we expect to receive back. 
          
          In this unit test we are only testing the existence of a response, and are not concerned 
          with what is contained in the response. We can view this as a very general, binary check, not specific. 
          
          In first statement, assert what we should not see
          In the second, assert what we should  see.
          Finally, call "done();" to move on to the next test.
        */
       console.log("over here");
        should.exist(response);
       done();
         
      });
    });
  });
});
