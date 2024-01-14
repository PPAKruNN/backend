"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprocessableEntityException = exports.InternalServerErrorException = exports.BadGatewayException = exports.ConflictException = exports.ForbiddenException = exports.NotFoundException = exports.UnauthorizedException = exports.BadRequestError = exports.HttpException = void 0;
var http_status_1 = __importDefault(require("http-status"));
var HttpException = /** @class */ (function (_super) {
    __extends(HttpException, _super);
    function HttpException(status, message) {
        var _this = _super.call(this, message) || this;
        _this.status = status;
        _this.message = message;
        return _this;
    }
    return HttpException;
}(Error));
exports.HttpException = HttpException;
var BadRequestError = /** @class */ (function (_super) {
    __extends(BadRequestError, _super);
    function BadRequestError(message) {
        return _super.call(this, http_status_1.default.BAD_REQUEST, message) || this;
    }
    return BadRequestError;
}(HttpException));
exports.BadRequestError = BadRequestError;
var UnauthorizedException = /** @class */ (function (_super) {
    __extends(UnauthorizedException, _super);
    function UnauthorizedException(message) {
        return _super.call(this, http_status_1.default.UNAUTHORIZED, message) || this;
    }
    return UnauthorizedException;
}(HttpException));
exports.UnauthorizedException = UnauthorizedException;
var NotFoundException = /** @class */ (function (_super) {
    __extends(NotFoundException, _super);
    function NotFoundException(message) {
        return _super.call(this, http_status_1.default.NOT_FOUND, message) || this;
    }
    return NotFoundException;
}(HttpException));
exports.NotFoundException = NotFoundException;
var ForbiddenException = /** @class */ (function (_super) {
    __extends(ForbiddenException, _super);
    function ForbiddenException(message) {
        return _super.call(this, http_status_1.default.FORBIDDEN, message) || this;
    }
    return ForbiddenException;
}(HttpException));
exports.ForbiddenException = ForbiddenException;
var ConflictException = /** @class */ (function (_super) {
    __extends(ConflictException, _super);
    function ConflictException(message) {
        return _super.call(this, http_status_1.default.CONFLICT, message) || this;
    }
    return ConflictException;
}(HttpException));
exports.ConflictException = ConflictException;
var BadGatewayException = /** @class */ (function (_super) {
    __extends(BadGatewayException, _super);
    function BadGatewayException(message) {
        return _super.call(this, http_status_1.default.BAD_GATEWAY, message) || this;
    }
    return BadGatewayException;
}(HttpException));
exports.BadGatewayException = BadGatewayException;
var InternalServerErrorException = /** @class */ (function (_super) {
    __extends(InternalServerErrorException, _super);
    function InternalServerErrorException(message) {
        return _super.call(this, http_status_1.default.INTERNAL_SERVER_ERROR, message) || this;
    }
    return InternalServerErrorException;
}(HttpException));
exports.InternalServerErrorException = InternalServerErrorException;
var UnprocessableEntityException = /** @class */ (function (_super) {
    __extends(UnprocessableEntityException, _super);
    function UnprocessableEntityException(message) {
        return _super.call(this, http_status_1.default.UNPROCESSABLE_ENTITY, message) || this;
    }
    return UnprocessableEntityException;
}(HttpException));
exports.UnprocessableEntityException = UnprocessableEntityException;
