
require('dotenv').config();
const expect = require('chai').expect;
const isJsonString = require("../src/utils/jsonParser");

describe('JSON PARSER UNIT TESTING', function () {

  it('1.Should return false for invalid json string', async () => {
    let parsedValue = isJsonString("")
    expect(parsedValue).to.equal(false);
  })

  it('1.Should return parsed json for valid json string', async () => {
    let parsedValue = isJsonString('{"a":1,"b":2}')
    expect(parsedValue).to.have.property('a');
    expect(parsedValue).to.have.property('b');
    expect(parsedValue.a).to.equal(1);
    expect(parsedValue.b).to.equal(2);
  })
});