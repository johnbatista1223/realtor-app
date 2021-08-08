import React, {useState } from 'react'
const Filter = (props) => {
  const [ priceLow, setPriceLow ] = useState("0")
  const [ priceHigh, setPriceHigh ] = useState("800000")
  // constructor() {
  //   super()
  //   this.cities = this.cities.bind(this)
  //   this.housetypes = this.housetypes.bind(this)
  //   this.bedrooms = this.bedrooms.bind(this)
  // }
  // /* Right before component rendered */
  // componentWillMount() {
  //   this.props.populateAction()
  // }
  // // !!! MAKE SURE TO BIND THIS WITH EACH FUNCTION IN CONSTRUCTOR
  // cities() {
  //   if (this.props.globalState.populateFormsData.cities !== undefined) {
  //     const { cities } = this.props.globalState.populateFormsData
  //     return cities.map(item => {
  //       return (
  //         <option value={item}>{item}</option>
  //       )
  //     })
  //   }
  // }
  let housetypes = () => {
    
      let housetypes = [
        <option value="multi_family">Multi Family</option>,
        <option value="single_family">Single Family</option>,
        <option value="mobile">Mobile</option>,
        <option value="land">Land</option>,
        <option value="farm">Farm</option>
      ]
      return housetypes
  }
  let bedrooms = () => {
    let bedroomsList = []
    for (let i = 1; i < 7;i++) {
      bedroomsList.push(<option key={i} value={i}>{i} BR</option>)
    }
      return bedroomsList
  }
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          {/* <select name="neighbourhood" className="filters neighbourhood" onChange={this.props.change}>
            <option value="all" selected>Any Neighbourhood</option>
            {this.cities()}
          </select> */}
          <select name="housetype" className="filters housetype" onChange={() => {console.log("test")}}>
            <option value="all" selected>All House Types</option>
            {housetypes()}
          </select>
          <select name="bedrooms" className="filters bedrooms" onChange={() => {console.log("test")}}>
            <option value="0" selected>0+ BR</option>
            {bedrooms()}
          </select>
          <div className="filters price">
            <span style={{color: "black", "textAlign": "left"}} className="title">Price</span>
            <input type="text" name="min_price" className="min-price" onChange={(e) => {
              if (priceLow === "0") {
                
                setPriceLow(e.target.value.substring(1))
              } else {
                
                setPriceLow(e.target.value)
              }
              
              // props.updatePriceLow(parseInt(e.target.value))
            }} value={priceLow} />
            <input type="text" name="max_price" className="max-price" onChange={(e) => {
              if (priceHigh === "0") {
                
                setPriceHigh(e.target.value.substring(1))
              } else {
                console.log("no")
                setPriceHigh(e.target.value)
              }
              // props.updatePriceHigh(parseInt(e.target.value))
              }} value={priceHigh} />
          </div>
          {/* <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
            <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
          </div> */}
          <div className="filters extras">
            <span className="title">Extras</span>
            <label htmlFor="extras">
              <span>Elevators</span>
              <input type="checkbox" name="elevator" value="elevator" onChange={() => {console.log("elevator change")}} />
            </label>
            <label htmlFor="extras">
              <span>Swimming Pool</span>
              <input type="checkbox" name="swimming_pool" value="swimming_pool" onChange={() => {console.log("pool change")}} />
            </label>
            <label htmlFor="extras">
              <span>Finished Basement</span>
              <input type="checkbox" name="finished_basement" value="finished_basement" onChange={() => {console.log("basement change")}} />
            </label>
            <label htmlFor="extras">
              <span>Gym</span>
              <input type="checkbox" name="gym" value="gym" onChange={() => {console.log("gym change")}} />
            </label>
          </div>
        </div>
        <button onClick={() => {
          console.log("Click");
          props.updateFilters(priceLow, priceHigh)}}>Apply Filters</button>
      </section>
      
    )
}
export default Filter