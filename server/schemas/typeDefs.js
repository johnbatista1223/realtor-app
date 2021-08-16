const { gql } = require('apollo-server-express');
const typeDefs = gql`
  
  type User {
    _id: ID
    username: String
    email: String
    password: String
    listings: [Listing]!
  }
  type Query {
    users: [User]
    listing(listingId: ID!): Listing
    user(username: String!): User
  }
  type Auth {
    token: ID!
    user: User
  }
  type Listing {
    _id: ID
    listingPrice: String
		listingAddress: String
    listingState: String
    listingCity: String
    listingZip: String
    listingImage: String
    listingId: String
    listingAuthor: String
    
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    saveListings(listingPrice: String!, listingAddress: String!, listingState: String!, listingCity: String!, listingZip: String!, listingImage: String!, listingId: String!, listingAuthor: String!): Listing
  }

`;
module.exports = typeDefs;