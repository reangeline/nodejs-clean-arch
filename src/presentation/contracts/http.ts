export type HttpResponse = {
  statusCode: number;
  body: any;
};

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error.stack,
});

export const ok = (body: any): HttpResponse => ({
  statusCode: 200,
  body,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
});
