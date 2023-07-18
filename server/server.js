require("dotenv").config({ path: __dirname + ".env" });
const express = require("express");
const { ApolloServer } = require("apollo-server-express"); //using apollo for working with GQL
const path = require("path");
const { authMiddleware } = require("./utils/auth"); //using our authorisation -With JWT

const { typeDefs, resolvers } = require("./schema"); //our GQL schema
const db = require("./config/connection"); //mongo connection

const PORT = process.env.PORT || 3020;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use("/images", express.static(path.join(__dirname, "../client/images")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// this snippet fixes bug where reload away from homepage would break deployed page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer();
