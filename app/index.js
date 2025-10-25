const express = require("express");
const cors = require("cors");
const contactsRouter = require("./routes/contact.route");
const ApiError = require("./api-error");

const app = express();

// Middleware: Cấu hình CORS
app.use(cors());

// Middleware: Cấu hình Express để phân tích cú pháp JSON trong body request
app.use(express.json());

// Định nghĩa route đơn giản cho trang chủ
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Contactbook application." });
});

// Gắn Router Liên hệ vào đường dẫn /api/contacts
app.use("/api/contacts", contactsRouter);

// Middleware xử lý lỗi 404 (Không tìm thấy Route)
// Code ở đây sẽ chạy khi không có route được định nghĩa nào khớp với yêu cầu.
app.use((req, res, next) => {
    // Chuyển sang middleware xử lý lỗi bằng cách gọi next() với đối tượng ApiError
    return next(new ApiError(404, "Resource not found"));
});

// Middleware xử lý lỗi tập trung.
// Đây là middleware cuối cùng, nhận lỗi từ các next(error) trước đó.
app.use((err, req, res, next) => {
    // Nếu lỗi là một instance của ApiError, sử dụng statusCode và message của nó.
    // Nếu không, mặc định là 500 (Internal Server Error).
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;
