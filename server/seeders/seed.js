const db = require("../config/connection");
const { Comment, Course, Resource, Tag, User } = require("../models");
//const commentSeed = require('./commentSeed.json');
const courseSeed = require("./courseSeed.json");
//const resourceSeed = require('./resourceSeed.json');
//const tagSeed = require('./tagSeed.json');
//const userSeed = require('./userSeed.json');

db.once("open", async () => {
  try {
    await Course.deleteMany({});
    await Course.insertMany(courseSeed);

    const allCourses = await Course.find({});
    console.log("All courses:", allCourses);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Added seed data successfully!");
  process.exit(0);
});
