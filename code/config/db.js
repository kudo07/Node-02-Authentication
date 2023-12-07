const mongoose = require("mongoose");
// Replace this with your MongoURl
const MONGOURl = "mongodb://127.0.0.1:27017";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURl, {
      useNewUrlParser: true,
    });

    console.log("connnected to db");
  } catch (e) {
    console.log(e);
    throw e;
  }
};
module.exports = InitiateMongoServer;
