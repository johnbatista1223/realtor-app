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