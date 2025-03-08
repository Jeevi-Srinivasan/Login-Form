const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Registration")
  .then(() => {
    console.log("Mongo db Connected ");
  })

  .catch(() => {
    console.log("Mongo db not Connected");
  });

const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("collections", LoginSchema);

module.exports = collection;
