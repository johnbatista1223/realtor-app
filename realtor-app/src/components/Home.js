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
  const [stateCode, setStateCode] = useState("MI")
  const [city, setCity] = useState("Michigan")
  const [priceLow, setPriceLow] = useState(0)
  const [priceHigh, setPriceHigh] = useState(800000)

  useEffect(() => {
    //Get listings
    console.log(priceLow, priceHigh)

    var options = {
      method: 'GET',
      url: 'https://us-real-estate.p.rapidapi.com/for-sale',
      params: { offset: '0', limit: '10', price_min: priceLow, price_max: priceHigh, state_code: stateCode, city: city, sort: 'newest' },
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
  }, [priceLow, priceHigh])

  // constructor() {
  //   super()
  //   this.state = {
  //     listingsData: listingsData,
  //     neighbourhood: 'all',
  //     housetype: 'all',
  //     bedrooms: 1,
  //     min_price: 0,
  //     max_price: 10000000,
  //     min_floor_space: 0,
  //     max_floor_space: 50000,
  //     elevator: false,
  //     swimming_pool: false,
  //     finished_basement: false,
  //     gym: false,
  //     filteredData: listingsData,
  //     populateFormsData: '',
  //     sortby: 'price-asc',
  //     view: 'box',
  //     search: ''
  //   }
  //   this.change = this.change.bind(this)
  //   this.filteredData = this.filteredData.bind(this)
  //   this.populateForms = this.populateForms.bind(this)
  //   this.changeView = this.changeView.bind(this)
  // }
  // componentWillMount() {
  //   // arrange according to their price
  //   var listingsData = this.state.listingsData.sort((a, b) => {
  //     return a.price - b.price
  //   })
  //   this.setState({
  //     listingsData
  //   })
  // }
  // change(event) {
  //   var name = event.target.name
  //   var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
  //   this.setState({
  //     [name]: value
  //   }, () => {
  //     // callback functn executed state change
  //     this.filteredData()
  //   })
  // }
  // changeView(viewName) {
  //   this.setState({
  //     view: viewName
  //   })
  // }
  // filteredData() {
  //   var newData = this.state.listingsData.filter((item) => {
  //     return item.price >= this.state.min_price
  //       && item.price <= this.state.max_price
  //       && item.floorSpace >= this.state.min_floor_space
  //       && item.floorSpace <= this.state.max_floor_space
  //       && item.rooms >= this.state.bedrooms
  //   })
  //   if (this.state.neighbourhood !== "all") {
  //     newData = newData.filter(item => (
  //       item.city === this.state.neighbourhood
  //     ))
  //   }
  //   if (this.state.housetype !== "all") {
  //     newData = newData.filter(item => (
  //       item.housetype === this.state.housetype
  //     ))
  //   }
  //   if (this.state.sortby === 'price-asc') {
  //     newData = newData.sort((a, b) => {
  //       return a.price - b.price
  //     })
  //   }
  //   if (this.state.sortby === 'price-dsc') {
  //     newData = newData.sort((a, b) => {
  //       return b.price - a.price
  //     })
  //   }
  //   if(this.state.search !== '') {
  //     newData = newData.filter(item => {
  //       var city = item.city.toLowerCase()
  //       var searchText = this.state.search.toLowerCase()

  //       if(city.match(searchText) !== null) {
  //         return true
  //       } else {
  //         return false
  //       }
  //     })
  //   }
  //   if (this.state.elevator) {
  //     newData = newData.filter(item => {
  //       return item.extras.includes('elevator')
  //     })
  //   }
  //   if (this.state.swimming_pool) {
  //     newData = newData.filter(item => {
  //       return item.extras.includes('swimming_pool')
  //     })
  //   }
  //   if (this.state.finished_basement) {
  //     newData = newData.filter(item => {
  //       return item.extras.includes('finished_basement')
  //     })
  //   }
  //   if (this.state.gym) {
  //     newData = newData.filter(item => {
  //       return item.extras.includes('gym')
  //     })
  //   }
  //   this.setState({
  //     filteredData: newData
  //   })
  // }
  // populateForms() {
  //   //neighbourhoods
  //   var cities = this.state.listingsData.map(item => (
  //     item.city
  //   ))
  //   cities = new Set(cities) /* !! Removes Duplicate Entries. Only Unique left !! */
  //   cities = [...cities]
  //   cities = cities.sort()
  //   //housetypes
  //   var housetypes = this.state.listingsData.map(item => (
  //     item.housetype
  //   ))
  //   housetypes = new Set(housetypes)
  //   housetypes = [...housetypes]
  //   housetypes = housetypes.sort()
  //   //bedrooms
  //   var bedrooms = this.state.listingsData.map(item => (
  //     item.rooms
  //   ))
  //   bedrooms = new Set(bedrooms)
  //   bedrooms = [...bedrooms]
  //   bedrooms = bedrooms.sort()
  //   this.setState({
  //     populateFormsData: {
  //       housetypes,
  //       bedrooms,
  //       cities
  //     }
  //   })
  // }
  return (
    <div className="for-sale">
      <div className="filter-wrapper">
        <Filter updateFilters={(priceLow, priceHigh) => {
          console.log("update")
          setPriceLow(parseInt(priceLow))
          setPriceHigh(parseInt(priceHigh))
        }} />
      </div>
      <div className="listings-wrapper">

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
