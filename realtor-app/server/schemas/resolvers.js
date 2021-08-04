const { User } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    users: async () => {
      // Get and return all documents from the classes collection
      return await User.find({});
    }
  },
  Mutation: {
    createUser: async (parent, args) => {
      const matchup = await User.create(args);
      return matchup;
    }
  }
};

module.exports = resolvers;
