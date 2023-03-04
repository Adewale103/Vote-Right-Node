module.exports = (firstName, lastName) => {
  var sp =
    performance.now() +
    Date.now().toString(36) +
    Math.random().toString(36).substring(2);
  var username = `${firstName.toLowerCase()}${lastName.toLowerCase()}-${sp.replace(
    ".",
    ""
  )}`;
  return username;
};
