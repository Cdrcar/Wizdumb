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

import Signup from './components/Signup';

import { AccountSettings, Course, DiscussionPage, Homepage, Navbar, LoggedinHomepage, Login, Modules, SearchPage, Footer } from './components';
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
            <Route path="/modules" element={<Modules />} />
            <Route path="/discussion" element={<DiscussionPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/account" element={<AccountSettings />} />
          </Routes>
          <h3
            id="courses"
            className="font-black flex flex-wrap mx-6 text-cyan-700 md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
          >
            Courses
          </h3>
          <div className="grid grid-cols-3 gap-0">

            {courses.map((course) => (
              <Course
                key={course.name}
                name={course.name}
                description={course.description}
                icon={course.icon}
                modules={course.modules}
              />
            ))}
          </div>
          <LoggedinHomepage />
          <Footer className="bg-lime-500" />
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
