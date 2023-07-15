import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../utils/auth';

const withAuth = (Component) => {
  return (props) => {
    const loggedIn = AuthService.loggedIn();
    const navigate = useNavigate();

    if (!loggedIn) {
      // If user is not logged in, redirect to the homepage
      navigate('/');
      return null;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
