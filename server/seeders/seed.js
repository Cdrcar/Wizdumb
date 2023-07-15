const db = require("../config/connection");
const { Comment, Course, Resource, Tag, User } = require("../models");
//const commentSeed = require('./commentSeed.json');
const courseSeed = require("./courseSeed.json");
// const userSeed = require("./userSeed.json");
const github = require ('./gitmodule.json');
const html = require ('./htmlmodule.json');
const nodeJS = require ('./nodejsmodule.json');
const express = require ('./expressmodule.json');
const javascript = require('./jsmodule.json')
const reactInfo = require('./reactSeed.json');

const modules=[ github, html, nodeJS, express, reactInfo, javascript]

db.once("open", async () => {
  try {
    await Course.deleteMany({});
    await Course.insertMany(courseSeed);
    // await User.deleteMany({});
    await Resource.deleteMany({});
    // await Resource.collection.dropIndex("name");
    await Resource.insertMany(modules.flat());
    // await User.insertMany(userSeed);

    const allCourses = await Course.find({});
    console.log("All courses:", allCourses);

    const allResources = await Resource.find({});
    console.log("All resources:", allResources);


    // const allUsers = await User.find({});
    // console.log("All users:", allUsers);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Added seed data successfully!");
  process.exit(0);
});