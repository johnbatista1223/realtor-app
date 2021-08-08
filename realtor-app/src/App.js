import React, { useContext } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import RegisterUser from './components/RegisterUser.js';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import InputForm from './components/inputForm';
import Home from './components/Home';
import Rental from './components/Rental';
import Userprofile from './components/Userprofile';
import { UserContext } from './context/UserProvider';
import "./App.css";





// import InputForm from './components/inputForm';


function App() {

  const { loggedIn } = useContext(UserContext)
  console.log(loggedIn)
  return (
    
      <div className="App">
        <Navbar authenticated={true}/>

        <div className="content-wrapper">

       

          <Switch>
            <Route exact path="/homes">
              <Home />
            </Route>
            <Route exact path="/rentals">
              <Rental />
            </Route>
            <Route exact path="Profile">
              <Userprofile />
            </Route>
            <Route exact path="/register">
              <RegisterUser />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Hero />
            </Route>
          </Switch>

         </div>     
  
        <Footer />
      </div>
 
  );
}

export default App;
