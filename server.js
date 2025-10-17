// Khai báo ứng dụng Express
const express = require("express");

// Cổng mà server sẽ lắng nghe
const PORT = 3000;

// Khởi tạo ứng dụng
const app = express();

// Định nghĩa một route cơ bản
// Khi người dùng truy cập vào đường dẫn gốc (/)
app.get("/", (req, res) => {
  res.json({ message: "Chào mừng đến với ứng dụng ContactBook Backend." });
});

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại cổng ${PORT}.`);
  console.log(`Truy cập: http://localhost:${PORT}`);
  console.log("hello"); // Dùng dấu nháy kép và có dấu chấm phẩy
});