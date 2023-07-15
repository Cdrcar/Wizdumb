import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './reducers/store';

import "./index.css";

import {
  AccountSettings,
  Course,
  CoursePage,
  DiscussionPage,
  Forum,
  ForumLikes,
  Homepage,
  Navbar,
  LoggedinHomepage,
  Login,
  Signup,
  Profile,
  MyCourses,
  ProfileSettings,
  SearchPage,
  Footer,
} from "./components";

import courses from "./constants/index.js";
import heroImage from "./assets";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Check if the user is authenticated
const isAuthenticated = () => {
  return !!localStorage.getItem("id_token");
};

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
      <Router>
        <div className="relative z-0 bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Routes */}
            <Route
              path="/home"
              element={isAuthenticated() ? <Profile /> : <Navigate to="/" replace />}
            />
            <Route
              path="/profileSettings"
              element={isAuthenticated() ? <ProfileSettings /> : <Navigate to="/" replace />}
            />
            <Route
              path="/my-courses"
              element={isAuthenticated() ? <MyCourses /> : <Navigate to="/" replace />}
            />

            <Route path="/forum" element={<Forum />} />
            <Route path="/forumlikes" element={<ForumLikes />} />
            <Route path="/discussion" element={<DiscussionPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/account" element={<AccountSettings />} />
            <Route path="/course" element={<Course />} />

            <Route path="/course/:courseName" element={<CoursePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
