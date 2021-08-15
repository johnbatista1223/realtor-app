var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config(); 

const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
var app = express();

// Create a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Update Express.js to use Apollo server features
server.applyMiddleware({ app });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname, `../client/build/index.html`));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});