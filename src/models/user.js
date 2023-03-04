const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      sparse: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    middleName: String,
    lastName: {
      type: String,
      required: true,
    },
    bvn: {
      type: String,
      required: true,
      unique: true,
    },
    gender: String,
    email: {
      type: String,
      max: 80,
      unique: true,
      required: true,
    },
    hasVotedForPresident: { type: Boolean, default: false },
    hasVotedForGovernor: { type: Boolean, default: false },
    hasVotedForSenate: { type: Boolean, default: false },
    hasVotedForHouseOfRep: { type: Boolean, default: false },
    hasVotedForHouseOfAssembly: { type: Boolean, default: false },
    phoneNumber: {
      type: String,
      max: 15,
      unique: true,
      sparse: true,
    },
    profilePictureUrl: String,
    address: String,
    date_of_birth: String,
    password: String,
    nationality: String,
    userType: {
      type: String,
      enum: ["candidate", "default", "admin"],
      default: "default",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", User);
