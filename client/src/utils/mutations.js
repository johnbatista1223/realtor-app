import { gql } from '@apollo/client';
export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token,
      user {
        _id
        username
        password
      }
    }
  }
`
export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      password
    }
  }
}
`;
export const SAVE_HOME = gql`
mutation saveListings($listing:Listing!,$username:String!) {
  saveListings(listing: $listing, username: $username) {
    token
  }
}
`;