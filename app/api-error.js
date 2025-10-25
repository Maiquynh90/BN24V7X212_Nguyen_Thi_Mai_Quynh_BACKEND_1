// Định nghĩa lớp lỗi tùy chỉnh cho API
class ApiError extends Error {
    constructor(statusCode, message) {
        // Gọi constructor của lớp cha (Error)
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ApiError;