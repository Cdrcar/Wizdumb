const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '3h';

module.exports = {
  // Middleware for authentication
  authMiddleware: function ({ req }) {
    // Extract token from various sources (body, query, headers)
    let token = req.body.token || req.query.token || req.headers.authorization;

    //Remove the 'Bearer' prefix if present
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    // If no token, return the request object
    if (!token) {
      return req;
    }

    try {
      // Verify the token using the secret and expiration time
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      // Attach the decoded user data to the request object
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  // Function to sign a token
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    // Create a JWT with the payload, secret, and expiration time
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
