const EntryModel = require("../models/entry.model");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

// create karne ke liye
const createEntryController = asyncHandler(async (req, res) => {
  let { studentId, topic, description, duration, difficulty } = req.body;

  if (!topic || !description || !duration) {
    throw new ApiError(400, "all field are required");
  }

  let entry = await EntryModel.create({
    studentId: req.user,
    topic,
    description,
    duration,
    difficulty,
  });
  res.status(201).json(new ApiResponse("entry created", entry));
});
const editentryController = asyncHandler(async (req, res) => {
  let id = req.params.id;
  let { topic, description, duration, difficulty } = req.body;
  if (!id) {
    throw new ApiError(400, "all field are required");
  }
  let findEntry = await EntryModel.findById({ _id: id });

  if (!findEntry) {
    throw new ApiError(404, "entry not found");
  }
  const updateFields = {};

  if (topic !== undefined) {
    updateFields.topic = topic;
  }

  if (description !== undefined) {
    updateFields.description = description;
  }

  if (duration !== undefined) {
    updateFields.duration = duration;
  }

  if (difficulty !== undefined) {
    updateFields.difficulty = difficulty;
  }

  const updatedEntry = await EntryModel.findByIdAndUpdate(
    id,
    { $set: updateFields },
    { new: true },
  );
  res.status(200).json(new ApiResponse("entry updated", updatedEntry));
});
const deleteEntryController = asyncHandler(async (req, res) => {
  let { id } = req.params;

  await EntryModel.findByIdAndDelete({ _id: id });

  res.status(200).json(new ApiResponse("entry deleted"));
});
// fetch api hai ye
const fetchEntryController = asyncHandler(async (req, res) => {
  let studentId = req.user;
  let allEntry = await EntryModel.find({ studentId }).sort({ createdAt: -1 });

  res.status(200).json(new ApiResponse("entry fetch", allEntry));
});
const fetchSingleEntryController = asyncHandler(async (req, res) => {
  let id = req.params.id;
  if (!id) {
    throw new ApiError(400, "all field are required");
  }
  let fetchSingleEntry = await EntryModel.findById({ _id: id });

  if (!fetchSingleEntry) {
    throw new ApiError(404, "entry not found");
  }
  res.status(200).json(new ApiResponse("entry fetched", fetchSingleEntry));
});

//filter api hai ye
const getEntryByTopicController = asyncHandler(async (req, res) => {
  let studentId = req.user._id;

  let { topicname } = req.params;
  let entry = await EntryModel.find({
    studentId: studentId,
    $or: [
      {
        topic: {
          $regex: topicname,
          $options: "i",
        },
      },
      {
        date: {
          $regex: topicname, // filter karne ke liye
          $options: "i", // case sensitive ke liye
        },
      },
      {
        difficulty: {
          $regex: topicname,
          $options: "i",
        },
      },
    ],
  });

  return res.status(200).json(new ApiResponse("entry fetched", entry));
});

module.exports = {
  createEntryController,
  editentryController,
  fetchEntryController,
  fetchSingleEntryController,
  getEntryByTopicController,
  deleteEntryController,
};
