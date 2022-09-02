const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const c = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`Connected:${c.connection.host}`);
  } catch (error) {
    console.log(`Error:${error}`);
    process.exit();
  }
};
module.exports = connectDB;
