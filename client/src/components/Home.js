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
import { FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const { loggedIn } = useContext(UserContext)
  const [listings, setListings] = useState([])
  const [stateCode, setStateCode] = useState("")
  const [city, setCity] = useState("")
  const [priceLow, setPriceLow] = useState(0)
  const [priceHigh, setPriceHigh] = useState(800000)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    //Get listings
    if (!(stateCode.length === 0 || city.length === 0)) {

      var options = {
        method: 'GET',
        url: 'https://us-real-estate.p.rapidapi.com/for-sale',
        params: { offset: '0', limit: '', price_min: priceLow, price_max: priceHigh, state_code: stateCode, city: city, sort: 'newest' },
        headers: {
          // Amy
          'x-rapidapi-key': '0a2e315049msh032e93ea820f37fp14695bjsn4bfb09912ad0',
          'x-rapidapi-host': 'us-real-estate.p.rapidapi.com',
          // // Ash
          // 'x-rapidapi-key': '89db18ec3cmshe16b812730bf2ddp12b34ajsn585d626a6b35',
          // 'x-rapidapi-host': 'us-real-estate.p.rapidapi.com'



        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data.data.results)
        setListings(response.data.data.results)
      }).catch(function (error) {
        console.error(error);
      });

    }




  }, [priceLow, priceHigh, city, stateCode])


  return (
    <div className="for-sale">
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
            return <ListingEntry key={index} listing={listing} />
          })}
        </div>
      </div>
      <section>

        {/* <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView} /> */}
      </section>
    </div>
  );

}

Home.defaultProps = {
  listings: []
}
const ListingEntry = (props) => {
  const saveFavorite = (listingid) => {
    console.log(listingid)
  }
  console.log(props.listing)
  return (
    <div className="listing-card">
      <div className="image">
        {
          props.listing.primary_photo !== null ? <img src={props.listing.primary_photo.href} /> : <span> NO PHOTO AVAILABLE</span>
        }

      </div>
      <div className="details">

        <div className="fa-icons">
          <div className="contact-icon">
            <div className="contact-icons fa-heart" onClick={saveFavorite(props.listing.id)}><FaHeart size={30} /></div>
          </div>
        </div>
        <div className="price">
          <em>{props.listing.list_price}</em>
        </div>
        <div className="address fas fa-map">
          <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFrEl2FBtQieNOY3GNxd_NFFFYI-9ViXs&callback=initMap"></script>
          {props.listing.location.address.line}
        </div>
        <div className="location" id="map">
          {/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script> */}
          {props.listing.location.address.city}, {props.listing.location.address.state_code}
        </div>
      </div>
    </div>
  )
}


export default Home;