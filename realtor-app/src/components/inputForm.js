import React, { useState } from 'react';
import axios from "axios"

const inputForm = () => {


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const options = {
      method: 'GET',
      url: 'https://us-real-estate.p.rapidapi.com/for-sale',
      params: {
        offset: '0',
        limit: '42',
        state_code: 'NJ',
        city: 'VENTNOR CITY',
        location: '08406',
        sort: 'newest'
      },
      headers: {
        'x-rapidapi-key': '6fff403699msh5b1976d32595c4cp1d0a2cjsn96fb98ccff53',
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

export default inputForm;