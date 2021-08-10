import React, { useContext } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer';
import RegisterUser from './components/Register/RegisterUser.js';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Rental from './components/Rental';
import Userprofile from './components/Userprofile';
import { UserContext } from './context/UserProvider';
import "./App.css";



function App() {

  const { loggedIn } = useContext(UserContext)
  
  // Construct our main GraphQL API endpoint
  const httpLink = createHttpLink({
    uri: 'http://localhost:4001/graphql',
  });

  // Construct request middleware that will attach the JWT token to every request as an `authorization` header
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Navbar authenticated={true} />

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
    </ApolloProvider>

  );
}

export default App;