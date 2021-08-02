import React from 'react';
import '../styles/hero.css';
import SearchForm from '../components/form';



function Hero() {
  return (
    <div className="hero hero-lg mb-3">
      <div className="hero-body text-center text-light">
        <h1>There's No Place Like Home</h1>
        <SearchForm/>
      </div>
    </div>
  )
}

export default Hero