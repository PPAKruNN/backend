import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";

enum RequestInputProperty {
  body = "body",
  query = "query",
  params = "params",
}

export function validateBody(schema: ObjectSchema) {
  return validateSchema(schema, RequestInputProperty.body);
}

export function validateQuery(schema: ObjectSchema) {
  return validateSchema(schema, RequestInputProperty.query);
}

export function validateParams(schema: ObjectSchema) {
  return validateSchema(schema, RequestInputProperty.params);
}

function validateSchema(schema: ObjectSchema, prop: RequestInputProperty) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req[prop]);
    if (validation.error) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .send({ error: validation.error.message });
    }

    next();
  };
}
