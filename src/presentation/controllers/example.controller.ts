import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { StatusError } from '@/presentation/errors/status-error';
import { exampleFactory } from '@/application/factories/example.factory';

export class ExampleController {
  static async example(req: Request, res: Response): Promise<Response> {
    try {
      const example = exampleFactory();
      const id = req.params.id;

      const exampleResponse = await example.execute({ id }).catch((error) => {
        throw new StatusError(httpStatus.BAD_REQUEST, error);
      });    
  
      return res.status(httpStatus.OK).send(exampleResponse);
    } catch (error: any) {
      return res.status(error.status).send(error);
    }
  }
}
