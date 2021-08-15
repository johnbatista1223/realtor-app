const { gql } = require('apollo-server-express');
const typeDefs = gql`
  
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  type Query {
    users: [User]
    listings:[QListing]
    user(username: String!): User
  }
  type Auth {
    token: ID!
    user: User
  }
  input Listing {
    id:String
    price:Int
    address:String
    image:String
}
  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    saveListings(listing: Listing!,username: String!):Auth
  }
  type QListing {
    price:Int
    address:String
    image:String
}
`;
module.exports = typeDefs;