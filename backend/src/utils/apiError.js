class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something Went Wrong",
    errors = [],
    stack = ""
  ) {
    super(message); //superclass constructor
    this.statusCode = statusCode; //status code 400+...
    this.message = message; //Err message
    this.data = null; //no data hence !
    this.errors = errors; //multiple errors if any
    this.success = false; //no success

    if(stack) {
        this.stack = stack; //if stack is filled
    } else Error.captureStackTrace(this, this.constructor) //else trace
  }
}

export default ApiError;