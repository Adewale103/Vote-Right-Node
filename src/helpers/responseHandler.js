module.exports = (
  data = { msg: "Success" },
  res,
  status = statuses[data] ?? 200
) => {
  console.log(`request ended with status ${status}\n`);
  const dataType = typeof data;

  if (dataType === "string") {
    data = { msg: data };
  } else {
    data = { data: data };
  }
  res.status(status).json({ success: true, ...data });
};

const statuses = {
  Unauthorized: 400,
};
