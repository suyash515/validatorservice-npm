const app = require("../index");

var validationElements = [{
    type: app.constants.type.email,
    maxLength: 200,
    value: "Suyash",
    name: "Name",
    required: true
}];

console.log("(check.js | 11) : app.validate(validationElements)");//debug
console.log(app.validate(validationElements));//debug