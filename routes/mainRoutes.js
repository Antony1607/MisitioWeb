const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

// GET
router.get("/", mainController.home);
router.get("/about", mainController.about);
router.get("/contact", mainController.contact);
router.get("/services", mainController.services);

// POST
router.post("/contact", mainController.sendContact);

module.exports = router;