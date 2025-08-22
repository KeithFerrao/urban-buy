const mongoose = require("mongoose"); //Need to install Mongoose
const mongoURI = "mongodb://localhost:27017/urbanBuy";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect to MongoDB");
  } catch (error) {
    console.log("Connection failed ", error);
  }
};

module.exports = connectToMongo;
