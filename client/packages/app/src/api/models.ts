import { HttpStatusCode } from "./httpStatusCodes";

export interface HttpResponse<T> {
  data: T;
  statusCode: HttpStatusCode;
}
