const generateException = (errorInstance, statusCode, title, exception) => {
  const errorInstances = errorInstance;
  errorInstances.statusCode = exception.statusCode || statusCode;
  errorInstances.title = exception.title || title;
  errorInstances.description = typeof exception === 'string' ? exception : exception.description;
};

export default generateException;
