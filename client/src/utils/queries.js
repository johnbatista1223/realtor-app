import { gql } from '@apollo/client';
export const QUERY_LISTINGS = gql`
  query getListings {
    listings {
      price
      address
      image
      }
    
  }
  `;


  export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      saveListings {
        _id
        address
        price
        image
      }
    }
  }
`;