const express = require("express");
const {
  createEntryController,
  editentryController,
  fetchEntryController,
  fetchSingleEntryController,
  getEntryByTopicController,
  deleteEntryController,
} = require("../controllers/entry.controller");
const Authmiddleware = require("../middleware/Auth.middleware");

let router = express.Router();

router.post("/create-entry", Authmiddleware, createEntryController);
router.post("/edit-entry/:id", editentryController);
router.get("/delete/:id", deleteEntryController);
router.get("/fetch-entries", Authmiddleware, fetchEntryController);
router.get("/fetch-single-entry/:id", fetchSingleEntryController);
router.get("/getEntry/:topicname", Authmiddleware, getEntryByTopicController);

module.exports = router;
