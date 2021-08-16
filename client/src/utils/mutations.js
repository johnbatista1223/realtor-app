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
mutation saveListings($listingPrice: String!, $listingAddress: String!, $listingAuthor: String!) {
	saveListings(listingPrice: $listingPrice, listingAddress: $listingAddress, listingAuthor: $listingAuthor) {
		_id
		listingPrice
		listingAddress
		listingAuthor
	}
	}
`;
