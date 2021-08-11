// import React from 'react';
// import Filter from '../components/Filter';
// import ListingsRental from '../components/ListingsRental';
// import '../styles/main.css';
// import '../styles/grid.css';
// import '../styles/listings.css';
// import '../styles/content-area.css';
// import '../styles/home.css'
// // import listingsRentalData from '../Data/ListingsRentalData';
// import axios from 'axios';
// import { FaHeart } from "react-icons/fa"
// import { UserContext } from '../context/UserProvider'

// const Rental = () => {
//   const { loggedIn } = useContext(UserContext)
//   const [listings, setListings] = useState([])
//   const [stateCode, setStateCode] = useState("")
//   const [city, setCity] = useState("")
//   const [priceLow, setPriceLow] = useState(0)
//   const [priceHigh, setPriceHigh] = useState(800000)
//   const [ errorMessage, setErrorMessage ] = useState("")

//   useEffect(() => {
//     //Get listings
//       if (!(stateCode.length === 0 || city.length === 0)) {

//         var options = {
//           method: 'GET',
//           url: 'https://us-real-estate.p.rapidapi.com/for-rent',
//           params: {
//             city: 'Detroit',
//             state_code: 'MI',
//             location: '48278',
//             limit: '10',
//             offset: '0',
//             sort: 'lowest_price',
//             price_min: '1000',
//             price_max: '3000',
//             beds_min: '1',
//             beds_max: '5',
//             baths_min: '1',
//             baths_max: '5',
//             property_type: 'apartment',
//             expand_search_radius: '25',
//             include_nearby_areas_slug_id: 'Union-City_NJ,Howard-Beach_NY',
//             home_size_min: '500',
//             home_size_max: '3000',
//             in_unit_features: 'central_air',
//             community_ammenities: 'garage_1_or_more',
//             cats_ok: 'true',
//             dogs_ok: 'true'
//           },
//           headers: {
//             'x-rapidapi-key': '0a2e315049msh032e93ea820f37fp14695bjsn4bfb09912ad0',
//             'x-rapidapi-host': 'us-real-estate.p.rapidapi.com'
//           }
//         };
        
//         axios.request(options).then(function (response) {
//           console.log(response.data);
//         }).catch(function (error) {
//           console.error(error);
//         });

      
//       }
//   }, [priceLow, priceHigh, city, stateCode])

//   return (
//     <div className="for-sale">
//       <div className="filter-wrapper">
//       <Filter updateFilters={(priceLow, priceHigh, city, state) => {

//         setListings([])
        
//         if (city.length === 0 || state.length === 0) {
//           setErrorMessage("You must enter a city and state")
//         } else {
    
//           setErrorMessage("")

//           setPriceLow(parseInt(priceLow))
//           setPriceHigh(parseInt(priceHigh))
//           setCity(city)
//           setStateCode(state)
//         }
//       }} />
//     </div>
//     <div className="listings-wrapper">
//       {console.log(errorMessage)}
//       {errorMessage.length > 0 && <div className="error-message">You must enter a city and select a state</div>}
//       <div className="listing-results-wrapper">
//         {listings.map((listing, index) => {
//           return <ListingEntry key={index} listing={listing} />
//         })}
//       </div>
//     </div>
//     <section>

//       {/* <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView} /> */}
//     </section>
//   </div>
// );

// }

// Rental.defaultProps = {
//   listings: []
// }
// const ListingEntry = (props) => {
//   const saveFavorite = (listingid) => {
//     console.log(listingid)
//   }
//   console.log(props.listing)
//   return (
//     <div className="listing-card">
//       <div className="image">
//         {
//           props.listing.primary_photo !== null ? <img src={props.listing.primary_photo.href} /> : <span> NO PHOTO AVAILABLE</span>
//         }

//       </div>
//       <div className="details">

//         <div className="fa-icons">
//           <div className="contact-icon">
//             <div className="contact-icons fa-heart" onClick={saveFavorite(props.listing.id)}><FaHeart size={30} /></div>
//           </div>
//         </div>
//         <div className="price">
//           ${props.listing.list_price}
//         </div>
//         <div className="location">
//           {props.listing.location.address.city}, {props.listing.location.address.state_code}
//         </div>

//       </div>
//     </div>
//   )
// }

// // class Rental extends React.Component {
// //   constructor() {
// //     super()
// //     this.state = {
// //       listingsRentalData: listingsRentalData,
// //       neighbourhood: 'all',
// //       housetype: 'all',
// //       bedrooms: 1,
// //       min_price: 0,
// //       max_price: 10000000,
// //       min_floor_space: 0,
// //       max_floor_space: 50000,
// //       elevator: false,
// //       swimming_pool: false,
// //       finished_basement: false,
// //       gym: false,
// //       filteredData: listingsRentalData,
// //       populateFormsData: '',
// //       sortby: 'price-asc',
// //       view: 'box',
// //       search: ''
// //     }

// //     this.change = this.change.bind(this)
// //     this.filteredData = this.filteredData.bind(this)
// //     this.populateForms = this.populateForms.bind(this)
// //     this.changeView = this.changeView.bind(this)
// //   }

// //   componentWillMount() {

// //     // arrange according to their price
// //     var listingsRentalData = this.state.listingsRentalData.sort((a, b) => {
// //       return a.price - b.price
// //     })

// //     this.setState({
// //       listingsRentalData
// //     })
// //   }

// //   change(event) {
// //     var name = event.target.name
// //     var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

// //     this.setState({
// //       [name]: value
// //     }, () => {
// //       // callback functn executed state change
// //       this.filteredData()
// //     })
// //   }

// //   changeView(viewName) {
// //     this.setState({
// //       view: viewName
// //     })
// //   }

// //   filteredData() {
// //     var newData = this.state.listingsRentalData.filter((item) => {
// //       return item.price >= this.state.min_price
// //         && item.price <= this.state.max_price
// //         && item.floorSpace >= this.state.min_floor_space
// //         && item.floorSpace <= this.state.max_floor_space
// //         && item.rooms >= this.state.bedrooms
// //     })

// //     if (this.state.neighbourhood !== "all") {
// //       newData = newData.filter(item => (
// //         item.city === this.state.neighbourhood
// //       ))
// //     }

// //     if (this.state.housetype !== "all") {
// //       newData = newData.filter(item => (
// //         item.housetype === this.state.housetype
// //       ))
// //     }

// //     if (this.state.sortby === 'price-asc') {
// //       newData = newData.sort((a, b) => {
// //         return a.price - b.price
// //       })
// //     }

// //     if (this.state.sortby === 'price-dsc') {
// //       newData = newData.sort((a, b) => {
// //         return b.price - a.price
// //       })
// //     }

// //     if(this.state.search !== '') {
// //       newData = newData.filter(item => {
// //         var city = item.city.toLowerCase()
// //         var searchText = this.state.search.toLowerCase()
        
// //         if(city.match(searchText) !== null) {
// //           return true
// //         } else {
// //           return false
// //         }

// //       })
// //     }

// //     if (this.state.elevator) {
// //       newData = newData.filter(item => {
// //         return item.extras.includes('elevator')
// //       })
// //     }

// //     if (this.state.swimming_pool) {
// //       newData = newData.filter(item => {
// //         return item.extras.includes('swimming_pool')
// //       })
// //     }

// //     if (this.state.finished_basement) {
// //       newData = newData.filter(item => {
// //         return item.extras.includes('finished_basement')
// //       })
// //     }

// //     if (this.state.gym) {
// //       newData = newData.filter(item => {
// //         return item.extras.includes('gym')
// //       })
// //     }

// //     this.setState({
// //       filteredData: newData
// //     })
// //   }

// //   populateForms() {

// //     //neighbourhoods
// //     var cities = this.state.listingsRentalData.map(item => (
// //       item.city
// //     ))
// //     cities = new Set(cities) /* !! Removes Duplicate Entries. Only Unique left !! */
// //     cities = [...cities]

// //     cities = cities.sort()

// //     //housetypes
// //     var housetypes = this.state.listingsRentalData.map(item => (
// //       item.housetype
// //     ))
// //     housetypes = new Set(housetypes)
// //     housetypes = [...housetypes]

// //     housetypes = housetypes.sort()

// //     //bedrooms
// //     var bedrooms = this.state.listingsRentalData.map(item => (
// //       item.rooms
// //     ))
// //     bedrooms = new Set(bedrooms)
// //     bedrooms = [...bedrooms]

// //     bedrooms = bedrooms.sort()

// //     this.setState({
// //       populateFormsData: {
// //         housetypes,
// //         bedrooms,
// //         cities
// //       }
// //     })
// //   }

// //   render() {
// //     return (
// //       <div className="App">
// //         <section>
// //           <Filter change={this.change} globalState={this.state} populateAction={this.populateForms} />
// //           <ListingsRental listingsRentalData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView} />
// //         </section>
// //       </div>
// //     );
// //   }
// // }

// export default Rental;