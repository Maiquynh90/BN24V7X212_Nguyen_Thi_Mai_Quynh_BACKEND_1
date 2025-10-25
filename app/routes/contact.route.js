const express = require("express");
// Đảm bảo đường dẫn này trỏ ĐÚNG đến app/controllers/contact.controller.js
const contacts = require("../controllers/contact.controller"); 
const router = express.Router();

// Định nghĩa các Route cho '/api/contacts'
router.route("/")
    .get(contacts.findAll) // GET /api/contacts
    .post(contacts.create) // POST /api/contacts
    .delete(contacts.deleteAll); // DELETE /api/contacts

// Định nghĩa Route cho '/api/contacts/favorite'
router.route("/favorite")
    .get(contacts.findAllFavorite); // GET /api/contacts/favorite

// Định nghĩa các Route cho '/api/contacts/:id'
router.route("/:id")
    .get(contacts.findOne) // GET /api/contacts/:id
    .put(contacts.update) // PUT /api/contacts/:id
    .delete(contacts.delete); // DELETE /api/contacts/:id

module.exports = router;