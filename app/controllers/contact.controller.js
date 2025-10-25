// 7 HÀM XỬ LÝ CHO CÁC ROUTE CỦA CONTACTS
// Các hàm này hiện tại chỉ trả về một thông báo để kiểm tra kết nối Router-Controller

exports.create = (req, res) => {
    res.send({ message: "create handler" });
};

exports.findAll = (req, res) => {
    res.send({ message: "findAll handler" });
};

exports.findOne = (req, res) => {
    res.send({ message: "findOne handler" });
};

exports.update = (req, res) => {
    res.send({ message: "update handler" });
};

// Hàm 'delete' - Xóa một liên hệ theo ID
exports.delete = (req, res) => {
    res.send({ message: "delete handler" });
};

// Hàm 'deleteAll' - Xóa tất cả liên hệ (Dòng 10 trong Route của bạn)
exports.deleteAll = (req, res) => {
    res.send({ message: "deleteAll handler" });
};

exports.findAllFavorite = (req, res) => {
    res.send({ message: "findAllFavorite handler" });
};

// Lưu ý: Đảm bảo file này được lưu trong thư mục D:\Backend1\app\controllers
