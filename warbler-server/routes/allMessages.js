const express = require("express");
const router = express.Router({ mergeParams: true });
const { getAllMessages } = require("../handlers/messages");

// prefix: /api/messages
router.route("/").get(getAllMessages);

module.exports = router;