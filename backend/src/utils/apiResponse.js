class ApiResponse{
    constructor(statusCode, data, message = 'Success'){
        this.statusCode = statusCode; //status codes
        this.data = data; //data 
        this.message = message; //any message to be sent
        this.success = statusCode < 400; //if no errors
    }
}
export default ApiResponse;