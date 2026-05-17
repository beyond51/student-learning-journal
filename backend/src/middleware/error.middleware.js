const errorMiddleware = async (err, req, res, next) => {
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "user already registered",
    });
  }
  res.status(err.statusCode || 500).json({
    message: err.message || "internal server error",
  });
};
module.exports = errorMiddleware;
