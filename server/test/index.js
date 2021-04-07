let server = require("../index")
let chai = require("chai");
let chaiHttp = require("chai-http");

//Assertion
chai.should();
chai.use(chaiHttp);

describe('Attendees APIs', () => {

    describe("Test GET route /api/attendees", () => {
        it("It should return all attendees", (done) => {
            chai.request(server)
                .get("/api/attendees")
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                });
        });
 
        it("It should NOT return all the attendees", (done) => {
            chai.request(server)
                .get("/api/attendee")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });

    });



});
