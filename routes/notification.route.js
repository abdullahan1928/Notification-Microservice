const express = require("express");
const { createNotification, getNotifications } = require("../controllers/notification.controller");

const router = express.Router();

router.post("/", createNotification);

router.get("/", getNotifications);

module.exports = router;