const express = require("express");
const cors = require("cors");
require('dotenv').config()
const database = require("./config/database.js");
const { graphqlHTTP } = require("express-graphql");
const AppError = require("./helpers/appError.js");
const errorHandler = require("./helpers/ErrorHandler.js");
const userData = require("./Portfolio.json");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require("graphql");


database.pool();

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return userData;
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parent, args) {
        userData.push({
          id: userData.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password
        });
        return args
      }
    }
  }
});

const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

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
    message: "I am listening on port " + port
  });
});

// routes
// app.use("/api/users", userRouter.router);
// app.use("/api/admin", adminRouter.router);

app.all("*", (req, res, next) => {
  next(new AppError(`the url ${req.originalUrl} does not exist`, 404));
});

app.use(errorHandler.messageErr);

app.listen(port, () => {
  console.log("Server up and running on PORT : ", port);
});
