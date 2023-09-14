type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'BAD_REQUEST';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: { message: string }
};

export type ServiceResponseSucess<T> = {
  status: 'SUCCESSFUL',
  data: T
};

export type ServiceRresponse<T> = ServiceResponseError | ServiceResponseSucess<T>;