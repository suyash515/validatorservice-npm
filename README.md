Validator Service
=========

A simple validator library to validate fields, max lengths, min lengths, emails, etc.

## Installation

  `npm i @suyashsumaroo/simple-validator`

## Usage

    var simpleValidator = require('simple-validator');

    var validationElements = [{
        type: simpleValidator.constants.type.string,
        maxLength: 200,
        value: "Suyash Sumaroo",
        name: "Name",
        required: true
    }, {
        type: simpleValidator.constants.type.enum,
        value: "no",
        name: "Security",
        required: true,
        in: ["yes", "no"]
    }];

    var error = simpleValidator.validate(validationElements);

## Values that can be validated
    
    The following value types can be validated:
        - string: simpleValidator.constants.type.string
        - email: simpleValidator.constants.type.email
        - password: simpleValidator.constants.type.password
        - enum: simpleValidator.constants.type.enum
        - json: simpleValidator.constants.type.json
        - number: simpleValidator.constants.type.number

    When using enum, an additional 'in' parameter should be passed with the list of values in the array