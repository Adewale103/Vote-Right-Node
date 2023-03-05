const mongoose = require("mongoose");
const Candidate = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    party: {
      type: String,
      enum: ["APC", "PDP", "CPC", "ACN", "LP", "CPP"],
    },
    voteCategory: {
      type: String,
      enum: [
        "Presidency",
        "Governorship",
        "Senate",
        "HouseOfRep",
        "HouseOfAssembly",
      ],
    },
    voteCount: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Candidate", Candidate);
