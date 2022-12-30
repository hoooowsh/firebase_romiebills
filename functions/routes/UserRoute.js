const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const catchAsync = require("../utils/catchAsync");

router.route("/").get(catchAsync(UserController.get_user));
router.route("/").post(catchAsync(UserController.create_user));

module.exports = router;
