import { HttpResponse } from '../../modules/courses/main/interfaces/http.interface';

export const ok = (data: any, statusCode = 200): HttpResponse => ({
  statusCode,
  body: data,
});

export const badRequest = (errors: any, statusCode = 400): HttpResponse => ({
  statusCode,
  body: {
    errors,
  },
});
