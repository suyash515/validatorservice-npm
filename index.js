'use strict';

module.exports = {

    constants: {
        type: {
            string: "string",
            email: "email",
            password: "password",
            enum: "enum",
            json: "json"
        }
    },

    validate: function(values) {
        var errors = [];

        _.each(values, function(item) {
            ValidatorService._validateLength(item, errors);
            ValidatorService._validateRequired(item, errors);
            ValidatorService._validateEnum(item, errors);

            if (item.type == ValidatorService.constants.type.email) {
                ValidatorService._validateEmail(item, errors);
            } else if (item.type == ValidatorService.constants.type.json) {
                ValidatorService._validateJson(item, errors);
            }
        });

        return errors;
    },

    _validateLength: function(item, errors) {
        var errorMessage = "";

        if (item.maxLength) {
            if (item.value) {
                if (item.value.length > item.maxLength) {
                    errorMessage = ReqService.req.__("error.validation.maxCharacters", item.name, item.maxLength);
                    ValidatorService._pushError(errors, item, errorMessage);
                }
            }
        }
    },

    _validateRequired: function(item, errors) {
        var errorMessage = "";

        if (item.required) {
            if (item.value && item.value.length > 0) {} else {
                errorMessage = ReqService.req.__("error.validation.required", item.name);
                ValidatorService._pushError(errors, item, errorMessage);
            }
        }
    },

    _validateEmail: function(item, errors) {
        var emailValidator = require("email-validator");
        var errorMessage = "";

        if (!emailValidator.validate(item.value)) {
            errorMessage = ReqService.req.__("error.validation.invalid", item.value);
            ValidatorService._pushError(errors, item, errorMessage);
        }
    },

    _validateEnum: function(item, errors) {
        var errorMessage = "";

        if (item.in) {
            if (_.indexOf(item.in, item.value) == -1) {
                errorMessage = ReqService.req.__("model.app.error.invalid_security_values");
                ValidatorService._pushError(errors, item, errorMessage);
            }
        }
    },

    _validateJson: function(item, errors) {
        var isJSON = require('is-json');
        var errorMessage = "";

        if (item.value && item.value.length > 0) {
            if (!isJSON(item.value)) {
                errorMessage = ReqService.req.__("error.validation.invalid_json", item.name);
                ValidatorService._pushError(errors, item, errorMessage);
            }
        }
    },

    _pushError: function(errorArray, item, error) {
        var existingElement = _.find(errorArray, {
            field: item.name
        });

        if (existingElement) {
            existingElement.message.push(error);
        } else {
            errorArray.push({
                field: item.name,
                message: [error]
            });
        }
    }

}