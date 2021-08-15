const { AuthenticationError } = require('apollo-server-errors');
const { user } = require('../config/connection');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
user: async (parent, { username }) => {
      return User.findOne({ username }).populate('saveLstings');
    },
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      console.log(username, email, password)
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username })
      if (!user) {
        throw new AuthenticationError('No user found with this email address')
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials")
      }
      const token = signToken(user)
      return { token, user }
    },
    
    saveListings: async (parent, { listing, username, }) => {
      console.log(listing);
      console.log(username);
      
      try {
        const result = await User.findOneAndUpdate({"username": username},{$push:{saveListings:listing.listingId}})
        console.log("woksdfs",result);
        return { token: "thththt", user: {username:"hsahdas"} }
      } catch(e) {
        console.log(e)
      }
      
      
    }
  },
};
module.exports = resolvers;