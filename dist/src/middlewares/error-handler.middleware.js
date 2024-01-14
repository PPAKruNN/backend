"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("../errors/errors");
var http_status_1 = __importDefault(require("http-status"));
function errorHandler(error, req, res, next) {
    if (error instanceof errors_1.HttpException) {
        var message_1 = {
            message: error.message,
            statusCode: error.status,
        };
        return res.status(error.status).send(message_1);
    }
    // Generic error handling
    console.log(error);
    var message = {
        message: "Internal Server Error",
        statusCode: http_status_1.default.INTERNAL_SERVER_ERROR,
    };
    return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send(message);
}
exports.default = errorHandler;
