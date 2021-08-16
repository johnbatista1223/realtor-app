import { gql } from '@apollo/client';
export const QUERY_LISTINGS = gql`
query user($username: String!) {
  user(username: $username) {
    username
    listings {
      _id
      listingPrice
      listingAddress
    }
  }
}
`;


// export const QUERY_USER = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//       saveListings {
//         listingId
//       }
//     }
//   }
// `;

