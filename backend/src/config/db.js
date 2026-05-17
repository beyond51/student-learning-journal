const mongoose = require("mongoose");

let connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("mongoDb connected");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectDb;
