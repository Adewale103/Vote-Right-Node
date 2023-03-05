const Candidate = require("../models/candidate");

exports.findCandidateByVoteCategoryAndParty = async (voteCategory, party) => {
  return await Candidate.findOne({ voteCategory: voteCategory, party: party });
};

exports.findCandidateByVoteCategory = async (voteCategory) => {
  return await Candidate.find({ voteCategory: voteCategory });
};
