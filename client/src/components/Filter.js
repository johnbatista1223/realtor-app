import React, {useState } from 'react'
import  '../styles/button.css';
const Filter = (props) => {
  const [ priceLow, setPriceLow ] = useState("")
  const [ priceHigh, setPriceHigh ] = useState("")
  const [ city, setCity ] = useState("")
  const [ state, setState ] = useState("")

 

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
          <div className="location">
            <div className="location-group">
            <label for="city-input">City</label>
            <input className="city-input" placeholder="Search ..." id="city-input" type="text" onChange={(e) => {
              setCity(e.target.value)
            }}/>
            </div>
            <div className="location-group">

            
            <label for="state-dropdown">State</label>
            <select id="state-dropdown" onChange={(e) => {
              console.log(e.target.value)
              setState(e.target.value)
            }}>
              <option value="">Select A State</option>
              <option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
            </select>
            </div>
          </div>
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
            <input type="text" name="min_price" placeholder="min" className="min-price" onChange={(e) => {
              if (priceLow === "min") {
                
                setPriceLow(e.target.value.substring(1))
              } else {
                
                setPriceLow(e.target.value)
              }
              
              // props.updatePriceLow(parseInt(e.target.value))
            }} value={priceLow} />
            <input type="text" name="max_price" placeholder="max" className="max-price" onChange={(e) => {
              if (priceHigh === "max") {
                
                setPriceHigh(e.target.value.substring(1))
              } else {
                console.log("no")
                setPriceHigh(e.target.value)
              }
              // props.updatePriceHigh(parseInt(e.target.value))
              }} value={priceHigh} />
          </div>
          {/* <div className="filters extras">
            <span  style={{color: "black"}}className="title">Extras</span>
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
          </div> */}
        </div>
        <button className ='apply-btn' onClick={() => {
          console.log("Click");
          props.updateFilters(priceLow, priceHigh, city, state)}}>Submit</button>
      </section>
      
    )
}
export default Filter