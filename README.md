Validator Service
=========

A simple validator library to validate fields, max lengths, min lengths, emails, etc.

## Installation

  `npm i @suyashsumaroo/simple-validator`

## Usage

    var simpleValidator = require('simple-validator');

    var validationElements = [{
        type: simpleValidator.constants.type.string,
        maxLength: App.attributes.name.maxLength,
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