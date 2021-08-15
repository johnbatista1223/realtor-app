import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import Carousel from './Caousel/carousel';
import { QUERY_LISTINGS } from '../utils/queries';

const Userprofile = () => {
  const {loading, data } = useQuery(QUERY_LISTINGS);

if(loading){
  return <div>test</div>
}
  return(
    <div>
      {console.log("listings", data )},
      <h1>hello</h1>
    </div>
  )
}
export default Userprofile



