import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import RegisterUser from './components/RegisterUser.js';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import InputForm from './components/inputForm';
import Home from './components/Home';
import Rental from './components/Rental';






// import InputForm from './components/inputForm';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      {/* <InputForm/> */}
      <br/>
      <br/>
      <br/>
      <br/>

      <Switch>
      <Route exact path="/homes">
          <Home/>
        </Route> 
        <Route exact path="/rentals">
          <Rental/>
        </Route>
        <Route exact path="/register">
          <RegisterUser />
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/">
          <Hero />
        </Route>
      </Switch>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>

    </div>
    </Router>
  );
}

export default App;
