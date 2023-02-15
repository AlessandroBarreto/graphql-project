const mongoose = require("mongoose");

const connectDB = async (url) => {
  const connect = await mongoose.set("strictQuery", false).connect(url);

  console.log(
    `MongoDB Connected: ${connect.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
