import { gql } from '@apollo/client';
export const QUERY_LISTINGS = gql`
  query getListings {
    listings {
      id
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
        listingId
      }
    }
  }
`;