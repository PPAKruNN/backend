import express, { json, Request, Response } from 'express';
import 'express-async-errors';
import httpStatus from 'http-status';
import errorHandler from './middlewares/error-handler.middleware';

const app = express();

app.use(json());
// app.use(cors())

app.get('/health', (req: Request, res: Response) => {
  return res.status(httpStatus.OK).send("I'm ok!!");
});
app.use(errorHandler);

export default app;
