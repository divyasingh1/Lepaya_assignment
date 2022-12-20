
require('dotenv').config();
const expect = require('chai').expect;
const executeRequest = require("../src/utils/executeRequest");

describe('JSON PARSER UNIT TESTING', function () {

    it('1.Should return Error with invalid URL ', async () => {
        try {
            await executeRequest({ url: "", method: "GET" });
        } catch (e) {
            console.log("Error received:", e);
        }
    })

    it('1.Should return Error with invalid Method ', async () => {
        try {
            await executeRequest({ url: "https://kbfszrxx5vacidgrgdhqzu25r40vyyuw.lambda-url.eu-central-1.on.aws/api/courses/ef131a0c-3006-4a38-8cfd-085fa08f8361", method: "" });
        } catch (e) {
            console.log("Error received:", e);
        }
    })

    it('1.Should return Success with valid URL and method', async () => {
        let courseDeatils = await executeRequest({ url: "https://kbfszrxx5vacidgrgdhqzu25r40vyyuw.lambda-url.eu-central-1.on.aws/api/courses/ef131a0c-3006-4a38-8cfd-085fa08f8361", method: "GET" });
        expect(courseDeatils).to.have.property('id');
        expect(courseDeatils).to.have.property('title');
        expect(courseDeatils).to.have.property('learners');
        expect(courseDeatils.id).to.equal("ef131a0c-3006-4a38-8cfd-085fa08f8361");
        expect(courseDeatils.title).to.equal('Business-focused bifurcated secured line');
    })

});