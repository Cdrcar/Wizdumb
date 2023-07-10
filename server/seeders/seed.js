const db = require("../config/connection");
const { Comment, Course, Resource, Tag, User } = require("../models");
//const commentSeed = require('./commentSeed.json');
const courseSeed = require("./courseSeed.json");
//const resourceSeed = require('./resourceSeed.json');
//const tagSeed = require('./tagSeed.json');
const userSeed = require("./userSeed.json");

db.once("open", async () => {
  try {
    await Course.deleteMany({});
    await Course.insertMany(courseSeed);
    await User.deleteMany({});
    await User.insertMany(userSeed);

    const allCourses = await Course.find({});
    console.log("All courses:", allCourses);

    const allUsers = await User.find({});
    console.log("All users:", allUsers);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Added seed data successfully!");
  process.exit(0);
});
