import { Request, Response } from 'express';
import { ControllerInterface } from '../../interfaces/controller.interface';
import { HttpResponse, HttpRequest } from '../../interfaces/http.interface';

export const routerAdapter = (controller: ControllerInterface) => async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const httpRequest: HttpRequest = {
    body: req.body,
  };

  const httpResponse: HttpResponse = await controller.handle(httpRequest);

  return res.status(httpResponse.statusCode).json(httpResponse.body);
};
