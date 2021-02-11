import { HttpRequest, HttpResponse } from './http.interface';

export interface ControllerInterface {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}
