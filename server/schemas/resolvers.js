const { AuthenticationError } = require('apollo-server-errors');
const { User } = require('../models');

const { signToken } = require('../utils/auth');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    users: async () => {
      // Get and return all documents from the classes collection
      return await User.find({});
    }
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      console.log(username, email, password)
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, {username, password}) => {

      const user = await User.findOne({username})

      if (!user) {
        throw new AuthenticationError('No user found with this email address')
      }

      const correctPw = await user.isCorrectPassword(password)

      if (!correctPw) {

        throw new AuthenticationError("Incorrect credentials")

      }

      const token = signToken(user)

      return { token, user }
    }
  }
  
};

module.exports = resolvers;
