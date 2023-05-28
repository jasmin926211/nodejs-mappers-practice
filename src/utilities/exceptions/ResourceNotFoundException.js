import generateException from './generateException';

class ResourceNotFoundException extends Error {
  constructor(exception) {
    super();
    generateException(this, 404, 'Resource Not Found', exception);
  }
}

export default ResourceNotFoundException;
