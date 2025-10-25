// app/app.js
const express = require("express");
const cors = require("cors");
// 1. IMPORT ROUTER
const contactsRouter = require("./routes/contact.route"); //
const ApiError = require("./api-error"); // Cần thiết cho xử lý lỗi

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

// 2. ĐĂNG KÝ ROUTER VỚI TIỀN TỐ /api/contacts
app.use("/api/contacts", contactsRouter); //


// Xử lý lỗi 404 (Phải đặt sau tất cả các routes khác)
app.use((req, res, next) => {
    // Code này sẽ chạy khi không có route nào khớp với yêu cầu.
    return next(new ApiError(404, "Resource not found")); //
});

// Middleware xử lý lỗi tập trung.
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    }); //
});


module.exports = app;