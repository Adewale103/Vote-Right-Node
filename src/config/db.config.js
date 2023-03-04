const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("./dotenv.config.js");
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((error) => console.log(error));
