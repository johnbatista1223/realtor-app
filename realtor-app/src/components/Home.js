import React, { useState, useContext, useEffect } from 'react';
import Filter from '../components/Filter'
import Listings from '../components/Listings'
import '../styles/grid.css';
import '../styles/listings.css';
import '../styles/content-area.css';
import '../styles/home.css'
import { UserContext } from '../context/UserProvider'
import axios from 'axios'
//import listingsData from '../Data/ListingsData'
import { FaHeart } from "react-icons/fa"

const Home = () => {
  const { loggedIn } = useContext(UserContext)
  const [listings, setListings] = useState([])
  const [stateCode, setStateCode] = useState("")
  const [city, setCity] = useState("")
  const [priceLow, setPriceLow] = useState(0)
  const [priceHigh, setPriceHigh] = useState(800000)
  const [ errorMessage, setErrorMessage ] = useState("")

  useEffect(() => {
    //Get listings
      if (!(stateCode.length === 0 || city.length === 0)) {

        var options = {
          method: 'GET',
          url: 'https://us-real-estate.p.rapidapi.com/for-sale',
          params: { offset: '0', limit: '', price_min: priceLow, price_max: priceHigh, state_code: stateCode, city: city, sort: 'newest' },
          headers: {
            'x-rapidapi-key': '0a2e315049msh032e93ea820f37fp14695bjsn4bfb09912ad0',
            'x-rapidapi-host': 'us-real-estate.p.rapidapi.com'
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
export default Home;
Home.defaultProps = {
  listings: []
}
const ListingEntry = (props) => {
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
            <a className="contact-icons fa-heart" href="/Profile"><FaHeart size={30} /></a>
          </div>
        </div>
        <div className="price">
          ${props.listing.list_price}
        </div>
        <div className="location">
          {props.listing.location.address.city}, {props.listing.location.address.state_code}
        </div>

      </div>
    </div>
  )
}
