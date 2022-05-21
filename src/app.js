const express = require("express");
const { ApolloServer } = require("apollo-server");
const app = express();
const port = 8000;

//import schema and resolvers
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");

//create apollo server
const server = new ApolloServer({ typeDefs, resolvers });

//initiate server
server
  .listen(port, () => console.log(`server is listening ${port}`))
  .then(({ url }) => console.log(`Server is running on ${url}`));
