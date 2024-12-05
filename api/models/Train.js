const mongoose = require("mongoose");

const Metro_book_Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    paymentid:{
        type:String,
        required: true,
        unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Metro_book", Metro_book_Schema);