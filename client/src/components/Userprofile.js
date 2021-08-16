import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import Carousel from './Caousel/carousel';
import { QUERY_LISTINGS } from '../utils/queries';
import Auth from '../utils/auth.js';
const Userprofile = () => {
  const { loading, data } = useQuery(QUERY_LISTINGS, {
    variables: { username: Auth.getProfile().data.username },
  });
  useEffect(() => {
  }, [])
  if (loading) {
    return <div>test</div>
  }
  return (
    <div>
      {console.log("listings", data)}
      <h1>hello</h1>
      {data.user.listings.map(listing => {
        console.log(listing)
        return (
          <div>
            <p>{listing.listingPrice}</p>
            <p>{listing.listingAddress}</p>
          </div>
        )
      })}
    </div>
  )
}
export default Userprofile