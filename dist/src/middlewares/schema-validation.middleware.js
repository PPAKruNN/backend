"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParams = exports.validateQuery = exports.validateBody = void 0;
var http_status_1 = __importDefault(require("http-status"));
var RequestInputProperty;
(function (RequestInputProperty) {
    RequestInputProperty["body"] = "body";
    RequestInputProperty["query"] = "query";
    RequestInputProperty["params"] = "params";
})(RequestInputProperty || (RequestInputProperty = {}));
function validateBody(schema) {
    return validateSchema(schema, RequestInputProperty.body);
}
exports.validateBody = validateBody;
function validateQuery(schema) {
    return validateSchema(schema, RequestInputProperty.query);
}
exports.validateQuery = validateQuery;
function validateParams(schema) {
    return validateSchema(schema, RequestInputProperty.params);
}
exports.validateParams = validateParams;
function validateSchema(schema, prop) {
    return function (req, res, next) {
        var validation = schema.validate(req[prop]);
        if (validation.error) {
            return res
                .status(http_status_1.default.UNPROCESSABLE_ENTITY)
                .send({ error: validation.error.message });
        }
        next();
    };
}
