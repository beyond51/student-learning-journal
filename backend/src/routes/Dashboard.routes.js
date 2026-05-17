const express = require("express");
const Authmiddleware = require("../middleware/Auth.middleware");
const { getDashboardStats } = require("../controllers/Dashboard.contoller");

let router = express.Router();

router.get("/stats", Authmiddleware, getDashboardStats);

module.exports = router;
