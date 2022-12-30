const express = require("express");
const cors = require("cors");
const database = require("./config/database.js");
const { graphqlHTTP } = require("express-graphql");
const userRouter = require("./api/users/user.router.js");
const adminRouter = require("./api/admin/admin.router.js");
const AppError = require("./helpers/appError.js");
const errorHandler = require("./helpers/ErrorHandler.js");
const dotenv = require("dotenv");
const schema = require("./api/schema/schema.js");

dotenv.config();
database.pool();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphql: process.env.NODE_ENV == "Portfolio"
  })
);
app.get("/", (req, res) => {
  res.json({
    success: 1,
    message: "I am listening on port " + process.env.PORT
  });
});

// routes
// app.use("/api/users", userRouter.router);
// app.use("/api/admin", adminRouter.router);

app.all("*", (req, res, next) => {
  next(new AppError(`the url ${req.originalUrl} does not exist`, 404));
});

app.use(errorHandler.messageErr);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on PORT : ", process.env.APP_PORT);
});
