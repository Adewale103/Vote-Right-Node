const send = require("../helpers/responseHandler");
const bvnValidator = require("../utils");
const {
  existsAppUserByBVN,
  existsAppUserByUsername,
  findUserByBVN,
  saveUser,
} = require("../queries/user.query");

exports.createAccount = async (req, res, next) => {
  const { BVN, password } = req.body;
  if (existsAppUserByBVN(BVN)) {
    return res.status(400).json({ error: "User with bvn already exist" });
  }

  const { data, status, message } = bvnValidator.validate(BVN);
  if (status !== "success") {
    return res
      .status(400)
      .json({ error: "Error occured while validating BVN" });
  }
};
