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
    // await Resource.insertMany(modules.flat());
    // await User.insertMany(userSeed);


    const allCourses = await Course.find({});
    // console.log("All courses:", allCourses);

    const resourceFiles = [
      { courseName: "GitHub", filePath: "./gitmodule.json" },
      { courseName: "HTML & CSS", filePath: "./htmlmodule.json" },
      { courseName: "NodeJS", filePath: "./nodejsmodule.json" },
      { courseName: "ExpressJS", filePath: "./expressmodule.json" },
      { courseName: "Javascript", filePath: "./jsmodule.json" },
      // Add more resource files with their corresponding course names
    ];

    for (const course of allCourses) {
      const resourceFile = resourceFiles.find(
        (file) => file.courseName === course.name
      );

      if (resourceFile) {
        try {
          const resources = require(resourceFile.filePath);
          const resourceIds = [];

          for (const resource of resources) {
            const newResource = new Resource(resource);
            await newResource.save();
            resourceIds.push(newResource._id);
          }

          await Course.updateOne(
            { _id: course._id },
            { $push: { resources: { $each: resourceIds } } }
          );
        } catch (error) {
          console.error(
            `Error loading resources file for ${course.name}:`,
            error
          );
        }
      }
    }

    console.log("All courses:", allCourses);

    // const allUsers = await User.find({});
    // console.log("All users:", allUsers);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Added seed data successfully!");
  process.exit(0);
});
