require("./src/config/dotenv.config.js");
const express = require("express");
const helmet = require("helmet");
const app = express();
const cors = require("cors");
const corsOptions = require("./src/config");
const { errorHandler } = require("./src/middlewares/errorHandler");

app.use(express.json({ limit: "100mb" }));
app.use(helmet());
app.use(cors(corsOptions));
require("./src/config/db.config.js");

// app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
