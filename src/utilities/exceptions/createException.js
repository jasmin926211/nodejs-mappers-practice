const createException = (exception, title, error, code) => {
  const exceptionError = error;
  exceptionError.statusCode = code;
  exceptionError.title = title;
  exceptionError.message = exception;
};

export default createException;
