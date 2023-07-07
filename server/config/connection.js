require('dotenv').config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    const { host, name } = db.connections[0];
    console.log(`Successfully connected to the database at host ${host}`);
    console.log(`Database name: ${name}`);
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
    if (!process.env.MONGODB_URI) {
      console.error("process.env.MONGODB_URI is undefined. Please ensure your .env file is set up correctly and is not being ignored by git (should be in .gitignore file).");
    }
  });

module.exports = mongoose.connection; // Export the Mongoose connection object
