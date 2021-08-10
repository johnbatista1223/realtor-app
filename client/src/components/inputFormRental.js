import React, { useState } from 'react';
import axios from "axios"

const inputFormRental = () => {


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const options = {
      method: 'GET',
      url: 'https://us-real-estate.p.rapidapi.com/for-rent',
      params: {
        offset: '0',
        limit: '10',
        state_code: 'MI',
        city: 'DETROIT',
        location: '48278',
        sort: 'newest'
      },
      headers: {
        'x-rapidapi-key': '9259ead76cmsh2de0e168743c1edp1edf72jsnbc26da5c3fdd',
        'x-rapidapi-host': 'us-real-estate.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  };



  return (
    <div>
      <h3>Test</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Test
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default inputFormRental;