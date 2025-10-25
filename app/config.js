// Định nghĩa cấu hình cho ứng dụng
const config = {
    app: {
        // Sử dụng process.env.PORT nếu có, nếu không thì dùng 3000
        port: process.env.PORT || 3000, 
    },
    // Chúng ta sẽ thêm cấu hình MongoDB tại đây sau này
};

module.exports = config;