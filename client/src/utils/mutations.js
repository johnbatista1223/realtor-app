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
export const ADD_PROFILE = gql`
  mutation addProfile($ProfileText: String!) {
    addProfile(ProfileText: $ProfileText) {
      _id
      
      
      
      comments {
        _id
        commentText
      }
    }
  }
`;