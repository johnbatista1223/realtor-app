import React from 'react';
import Filter from '../components/Filter'
import ListingsRental from '../components/ListingsRental'
import '../styles/main.css';

import listingsRentalData from '../Data/ListingsRentalData'

class Rental extends React.Component {
  constructor() {
    super()
    this.state = {
      listingsRentalData: listingsRentalData,
      neighbourhood: 'all',
      housetype: 'all',
      bedrooms: 1,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gym: false,
      filteredData: listingsRentalData,
      populateFormsData: '',
      sortby: 'price-asc',
      view: 'box',
      search: ''
    }

    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  componentWillMount() {

    // arrange according to their price
    var listingsRentalData = this.state.listingsRentalData.sort((a, b) => {
      return a.price - b.price
    })

    this.setState({
      listingsRentalData
    })
  }

  change(event) {
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      // callback functn executed state change
      this.filteredData()
    })
  }

  changeView(viewName) {
    this.setState({
      view: viewName
    })
  }

  filteredData() {
    var newData = this.state.listingsRentalData.filter((item) => {
      return item.price >= this.state.min_price
        && item.price <= this.state.max_price
        && item.floorSpace >= this.state.min_floor_space
        && item.floorSpace <= this.state.max_floor_space
        && item.rooms >= this.state.bedrooms
    })

    if (this.state.neighbourhood !== "all") {
      newData = newData.filter(item => (
        item.city === this.state.neighbourhood
      ))
    }

    if (this.state.housetype !== "all") {
      newData = newData.filter(item => (
        item.housetype === this.state.housetype
      ))
    }

    if (this.state.sortby === 'price-asc') {
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }

    if (this.state.sortby === 'price-dsc') {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    if(this.state.search !== '') {
      newData = newData.filter(item => {
        var city = item.city.toLowerCase()
        var searchText = this.state.search.toLowerCase()
        
        if(city.match(searchText) !== null) {
          return true
        } else {
          return false
        }

      })
    }

    if (this.state.elevator) {
      newData = newData.filter(item => {
        return item.extras.includes('elevator')
      })
    }

    if (this.state.swimming_pool) {
      newData = newData.filter(item => {
        return item.extras.includes('swimming_pool')
      })
    }

    if (this.state.finished_basement) {
      newData = newData.filter(item => {
        return item.extras.includes('finished_basement')
      })
    }

    if (this.state.gym) {
      newData = newData.filter(item => {
        return item.extras.includes('gym')
      })
    }

    this.setState({
      filteredData: newData
    })
  }

  populateForms() {

    //neighbourhoods
    var cities = this.state.listingsRentalData.map(item => (
      item.city
    ))
    cities = new Set(cities) /* !! Removes Duplicate Entries. Only Unique left !! */
    cities = [...cities]

    cities = cities.sort()

    //housetypes
    var housetypes = this.state.listingsRentalData.map(item => (
      item.housetype
    ))
    housetypes = new Set(housetypes)
    housetypes = [...housetypes]

    housetypes = housetypes.sort()

    //bedrooms
    var bedrooms = this.state.listingsRentalData.map(item => (
      item.rooms
    ))
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]

    bedrooms = bedrooms.sort()

    this.setState({
      populateFormsData: {
        housetypes,
        bedrooms,
        cities
      }
    })
  }

  render() {
    return (
      <div className="App">
        <section>
          <Filter change={this.change} globalState={this.state} populateAction={this.populateForms} />
          <ListingsRental listingsRentalData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView} />
        </section>
      </div>
    );
  }
}

export default Rental;