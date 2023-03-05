const Flutterwave = require("flutterwave-node-v3");
const flw = new Flutterwave(
  String(process.env.PUBLIC_KEY),
  String(process.env.SECRET_KEY)
);

exports.validate = async (bvn) => {
  const payload = { bvn: bvn };
  return await flw.Misc.bvn(payload);
};
