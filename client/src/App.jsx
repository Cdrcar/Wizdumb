import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

import { AccountSettings, Course, DiscussionPage, Homepage, Navbar, LoggedinHomepage, Login, Signup, Profile, Modules, SearchPage, Footer } from './components';
import courses from './constants/index.js';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='relative z-0 bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/discussion" element={<DiscussionPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/account" element={<AccountSettings />} />
            <Route path ="/course" element={<Course />} />
          </Routes>
        
          <LoggedinHomepage />
          <Footer />
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
