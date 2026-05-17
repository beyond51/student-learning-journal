const EntryModel = require("../models/entry.model");
const ApiResponse = require("../utils/apiResponse");

const getDashboardStats = async (req, res) => {
  const studentId = req.user.id;

  const totalEntries = await EntryModel.countDocuments({
    studentId,
  });

  const totalHoursResult = await EntryModel.aggregate([
    {
      $match: {
        studentId: req.user._id,
      },
    },
    {
      $group: {
        _id: null,
        totalHours: {
          $sum: "$duration",
        },
      },
    },
  ]);

  const totalStudyHours =
    totalHoursResult.length > 0 ? totalHoursResult[0].totalHours : 0;

  const averageStudyHours =
    totalEntries > 0 ? (totalStudyHours / totalEntries).toFixed(2) : 0;

  const recentTopics = await EntryModel.find({
    studentId,
  })
    .sort({ createdAt: -1 })
    .limit(5)
    .select("topic duration difficulty date");

  res.status(200).json(
    new ApiResponse("stats fetched", {
      totalEntries,
      totalStudyHours,
      averageStudyHours,
      recentTopics,
    }),
  );
};

module.exports = {
  getDashboardStats,
};
