Validator Service
=========

A simple validator library to validate fields, max lengths, min lengths, emails, etc.

## Installation

  `npm install validatorservice`

## Usage

    var validatorservice = require('validatorservice');

    var validationElements = [{
        type: validatorservice.constants.type.string,
        maxLength: App.attributes.name.maxLength,
        value: "Suyash Sumaroo",
        name: "Name",
        required: true
    }, {
        type: validatorservice.constants.type.enum,
        value: "no",
        name: "Security",
        required: true,
        in: ["yes", "no"]
    }];

    var error = validatorservice.validate(validationElements);