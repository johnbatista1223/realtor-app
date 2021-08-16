import React, { useState, useContext, useEffect } from 'react';
import Filter from '../components/Filter'
// import Listings from '../components/Listings'
import '../styles/grid.css';
// import '../styles/listings.css';
import '../styles/content-area.css';
import '../styles/home.css'
import { UserContext } from '../context/UserProvider'
import axios from 'axios'
//import listingsData from '../Data/ListingsData'
import { FaHeart } from "react-icons/fa";
// import { FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousel from './Caousel/carousel';
import { FaMapMarked } from "react-icons/fa";
import { SAVE_HOME } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Userprofile from './Userprofile';
import { useHistory } from 'react-router-dom';
import Auth from '../utils/auth.js';

// const api_key = process.env.REACT_APP_API_KEY;
// console.log(process.env.REACT_APP_API_KEY)

const Home = () => {
  const { token, username } = useContext(UserContext)
  const [listings, setListings] = useState([])
  const [stateCode, setStateCode] = useState("")
  const [city, setCity] = useState("")
  const [priceLow, setPriceLow] = useState(0)
  const [priceHigh, setPriceHigh] = useState(800000)
  const [errorMessage, setErrorMessage] = useState("")
  const [carouselImages, setCarouselImages] = useState([])
  const [data, setData] = useState([]);

  useEffect(() => {
    //Get listings
    if (!(stateCode.length === 0 || city.length === 0)) {
      var options = {
        method: 'GET',
        url: 'https://us-real-estate.p.rapidapi.com/for-sale',
        params: { offset: '0', limit: '', price_min: priceLow, price_max: priceHigh, state_code: stateCode, city: city, sort: 'newest' },
        headers: {
          'x-rapidapi-key': '6fff403699msh5b1976d32595c4cp1d0a2cjsn96fb98ccff53',
          'x-rapidapi-host': 'us-real-estate.p.rapidapi.com'
          // b8cff983eemsh2ff101990d69507p1a41e2jsn1c950c5975d Amy's other API key
          // 6fff403699msh5b1976d32595c4cp1d0a2cjsn96fb98ccff53 Raquans API key
          // 9259ead76cmsh2de0e168743c1edp1edf72jsnbc26da5c3fdd Amy's API key
        }
      };
      axios.request(options).then(function (response) {
        console.log(response)
        let tempListings = [...response.data.data.results]
        tempListings.sort((a, b) => {
          if (a.list_price < b.list_price) {
            return -1
          } else {
            return 1
          }
        })
        setListings(tempListings)
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, [priceLow, priceHigh, city, stateCode])
  return (
    <div className="for-sale card-background">
      {carouselImages.length > 0 && <Carousel images={carouselImages} closeCarousel={() => setCarouselImages([])} />}
      <div className="filter-wrapper">
        <Filter updateFilters={(priceLow, priceHigh, city, state) => {
          setListings([])
          if (city.length === 0 || state.length === 0) {
            setErrorMessage("You must enter a city and state")
          } else {
            setErrorMessage("")
            setPriceLow(parseInt(priceLow))
            setPriceHigh(parseInt(priceHigh))
            setCity(city)
            setStateCode(state)
          }
        }} />
      </div>
      <div className="listings-wrapper">
        {console.log(errorMessage)}
        {errorMessage.length > 0 && <div className="error-message">You must enter a city and select a state</div>}
        <div className="listing-results-wrapper">
          {listings.map((listing, index) => {
            console.log(listings);
            return <ListingEntry key={index} listing={listing} username={username} carouselImages={
              (images) => {
                setCarouselImages(images)
              }
            } />
          })}
        </div>
      </div>
    </div>
  );
}
Home.defaultProps = {
  listings: []
}
const ListingEntry = (props) => {
  console.log('props working', props)
  const [saveListings, { loading, data }] = useMutation(SAVE_HOME);
  let history = useHistory()
  const saveFavorite = () => {
    console.log(Auth.getProfile().data.useranme)
    const { data } = saveListings({
      variables: {
        listingPrice: props.listing.list_price.toString(),
        listingAddress: props.listing.location.address.line,
        listingState: props.listing.location.address.state_code,
        listingCity: props.listing.location.address.city,
        listingZip: props.listing.location.address.postal_code,
        listingImage: props.listing.primary_photo.href,
        listingId: props.listing.property_id,
        listingAuthor: Auth.getProfile().data.username
      }
  });
    console.log("data", data)
    // history.push("/Userprofiles")
  }
  let googlemaplink = `https://www.google.com/maps/place/${props.listing.location.address.line},+${props.listing.location.address.city},+${props.listing.location.address.state_code}+${props.listing.location.address.postal_code}`
  console.log(props)
  return (
    <div className="listing-card">
      <a href={googlemaplink} class="fa-map" target="_blank"><FaMapMarked size={30} /></a>
      <div className="image" onClick={() => {
        props.carouselImages(props.listing.photos)
      }}>
        {
          props.listing.primary_photo !== null ? <img src={props.listing.primary_photo.href} /> : <span> NO PHOTO AVAILABLE</span>
        }
      </div>
      <div className="details">
        <div className="fa-icons">
          <div className="contact-icon">
          <div className="contact-icons fa-heart" onClick={() => {saveFavorite()}}><FaHeart size={30} /></div>
          </div>
        </div>
        <div className="price">
          <em>List Price: ${props.listing.list_price}</em>
        </div>
        <div className="address">
          {props.listing.location.address.line}
        </div>
        <div className="location">
          {/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script> */}
          {/* {props.listing.location.flags.is_contingent} */}
          {props.listing.location.address.city}, {props.listing.location.address.state_code} {props.listing.location.address.postal_code}
        </div>
        <div className="bedrooms">
          {props.listing.description.beds} Bedrooms
        </div>
        <div className="bathrooms">
          {props.listing.description.baths} Bathrooms
        </div>
        <div className="squarefeet">
        {props.listing.description.sqft} Square Feet

        </div>
        {props.listing.flags.is_contingent === null ? <div></div> : <div className="flag-contingent"> Status: Contingent</div>}
        {props.listing.flags.is_pending === null ? <div></div> : <div className="flag-pending"> Status: Pending</div>}
        {/* <div className="status">
        
      {
      props.flags ===  {props.is_contingent} ? Pending
      }
        </div> */}
      </div>
    </div>
  )
}
export default Home;