import httpStatus from "http-status";

export class HttpException extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export class BadRequestError extends HttpException {
  constructor(message: string) {
    super(httpStatus.BAD_REQUEST, message);
  }
}

export class UnauthorizedException extends HttpException {
  constructor(message: string) {
    super(httpStatus.UNAUTHORIZED, message);
  }
}

export class NotFoundException extends HttpException {
  constructor(message: string) {
    super(httpStatus.NOT_FOUND, message);
  }
}

export class ForbiddenException extends HttpException {
  constructor(message: string) {
    super(httpStatus.FORBIDDEN, message);
  }
}

export class ConflictException extends HttpException {
  constructor(message: string) {
    super(httpStatus.CONFLICT, message);
  }
}

export class BadGatewayException extends HttpException {
  constructor(message: string) {
    super(httpStatus.BAD_GATEWAY, message);
  }
}

export class InternalServerErrorException extends HttpException {
  constructor(message: string) {
    super(httpStatus.INTERNAL_SERVER_ERROR, message);
  }
}

export class UnprocessableEntityException extends HttpException {
  constructor(message: string) {
    super(httpStatus.UNPROCESSABLE_ENTITY, message);
  }
}
