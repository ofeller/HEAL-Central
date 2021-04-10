let server = require("../index")
let chai = require("chai");
let chaiHttp = require("chai-http");

//Assertion
chai.should();
chai.use(chaiHttp);

const { assert } = require('console');
var should = require('should'), 
fs = require('fs'),
request = require('request');

//Globals
var attendees;

describe('Attendees APIs', function() {

    before(function(done) {
        fs.readFile('attendees.json', 'utf8', function(err, data) {
          attendees = JSON.parse(data);
    
          /*
            Calling done() will pass code execution to the next appropriate block of code. 
            In this case, execution will pass to the first it() statement.  
           */
          done();
        });
    });

    describe('Server responds to requests', function() {
        it('should respond', function(done) {
          /*
            The request module allows us to make HTTP requests. This module could also be useful in 
            making API calls to web services you make use of in your application, such as Google Maps. 
           */
          request.get('http://localhost:3000', function(error, response, body) {
            /*
              The 'should' module is an assertion library. Assertions allow us to compare the functions
              that we are testing to the values we expect to receive back. 
              
              In this unit test we are only testing the existence of a response, and are not concerned 
              with what is contained in the response. We can view this as a very general, binary check, not specific. 
              
              In first statement, assert what we should not see
              In the second, assert what we should  see.
              Finally, call "done();" to move on to the next test.
            */
            should.exist(response)
           done();
             
          });
        });
      });
    
        // For the last test, let's use make primitive value comparisons
        it('responds with a 404 error to other GET requests', function(done) {
          request.get('http://localhost:3000/pizza', function(error, response, body) {
              // First, assert that the status code is what it's supposed to be (exactly 404) if the listing were missing.
           should.deepEqual(response.statusCode,404)
           should.equal(response.statusMessage, 'Not Found')        
            // For the last assertion, check that the string output is the same message server.js outputs when a listing is missing:
            // Finally, call "done();" to finish!
    
            done();        
    
          });
        });
    });