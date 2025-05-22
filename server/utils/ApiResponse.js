class ApiResponse {
  constructor(message = "Success", data) {
    this.message = message;
    this.data = data;
    this.success = true;
  }
}

export { ApiResponse };
