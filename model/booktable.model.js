const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const booktableschema = new mongoose.Schema({
  BookingType : {type : String, require : true},
  NumberOfPerson : {type : Number, require : true},
  DateOfBooking : { type: Date, require: true },
  BookingTime : {type : Date, require : true}
});


module.exports = mongoose.model("booktable",booktableschema);