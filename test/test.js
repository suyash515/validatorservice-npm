const assert = require("chai")
    .assert;
const expect = require("chai")
    .expect;
const app = require("../index");

var validationElements = [{
    type: app.constants.type.string,
    maxLength: 200,
    value: "Suyash",
    name: "Name",
    required: true
}, {
    type: app.constants.type.number,
    value: "5",
    name: "Number Test"
}];

describe("App", function() {
    it("app should return empty array", function() {
        expect(app.validate(validationElements))
            .to.be.instanceof(Array);
        expect(app.validate(validationElements))
            .to.have.length(0);
    });
});