import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';

import { QUERY_LISTINGS } from '../utils/queries';
import Auth from '../utils/auth.js';
import '../styles/home.css'

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
      <h1>Saved Listings </h1>
      {data.user.listings.map(listing => {
        console.log(listing)
        return (
          <ListingEntryProfile price={listing.listingPrice} address={listing.listingAddress} city={listing.listingCity} state={listing.listingState} zip={listing.listingZip} image={listing.images} />
        )
      })}
    </div>  
  )
}

const ListingEntryProfile = (props) => {
 
  console.log(props)
  
 
  return (
    <div className="listing-card for-sale">
      <div className="image">
        {props.images !== null ? <img src={props.images} /> : <span> NO PHOTO AVAILABLE</span>
        }
      </div>
      <div className="details">
        
        <div className="price details">
          <em>List Price: ${props.price}</em>
        </div>
        <div className="address details">
          {props.address}, {props.city}, {props.state} {props.zip}
        </div> 
      </div>
    </div>
  )
}
export default Userprofile