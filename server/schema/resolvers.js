const { AuthenticationError } = require("apollo-server-express");
const { User, Course, Comment, Resource, Tag } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parents, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    getUser: async (parent, { id }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      return await User.findById(id);
    },
    getUsers: async () => {
      return await User.find().populate("courses");
    },
    getCourse: async (parent, { id }) => {
      return await Course.findById(id);
    },
    getCourses: async () => {
      return await Course.find();
    },

    getComment: async (parent, { id }) => {
      return await Comment.findById(id);
    },
    getComments: async () => {
      return await Comment.find();
    },
    getResource: async (parent, { id }) => {
      return await Resource.findById(id);
    },
    getResources: async () => {
      return await Resource.find();
    },
    getTag: async (parent, { id }) => {
      return await Tag.findById(id);
    },
    getTags: async () => {
      return await Tag.find();
    },
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      return await User.findById(context.user._id).populate("courses");
    },
  },
  Mutation: {
    createUser: async (
      parent,
      { firstName, lastName, email, password, username }
    ) => {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        username,
      });
      if (!user) {
        throw new Error("Failed to create user");
      }
      const token = signToken(user);

      return { token, user };
    },
    loginUser: async (parent, { email, password }) => {
      console.log("Attempted login for email:", email);

      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Invalid email or password");
      }

      const correctPw = await user.isCorrectPassword(password);
      console.log("Correct password:", correctPw);

      if (!correctPw) {
        throw new AuthenticationError("Invalid email or password");
      }

      const token = signToken(user);
      console.log("Successful authentication, token generated");

      return { token, user };
    },
    updateUserProfile: async (parent, { input }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }

      const {
        firstName,
        lastName,
        aboutMe,
        location,
        topSkills,
        profilePhoto,
      } = input;

      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        {
          firstName,
          lastName,
          aboutMe,
          location,
          topSkills,
          profilePhoto,
        },
        { new: true }
      ).populate("courses");

      const token = signToken(updatedUser); // Generate a new token for the updated user

      return { token, user: updatedUser };
    },
    updateUser: async (parent, { input }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }

      const {
        firstName,
        lastName,
        aboutMe,
        location,
        topSkills,
        profilePhoto,
      } = input;

      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        {
          firstName,
          lastName,
          aboutMe,
          location,
          topSkills,
          profilePhoto,
          comments,
          commentReply,
          likedComment,
        },
        { new: true }
      ).populate("courses");

      const token = signToken(updatedUser); // Generate a new token for the updated user

      return { token, user: updatedUser };
    },

    deleteUser: async (parent, { id }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      return await User.findByIdAndDelete(id);
    },

    saveCourse: async (parent, { courseId }, context) => {
      const user = context.user; // Access the user object from the context directly

      if (user) {
        const updateUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $push: { courses: courseId } },
          { new: true }
        );
        return updateUser;
      }

      throw new Error("User not authenticated");
    },

    removeSavedCourse: async (parent, { courseId }, { user, pubsub }) => {
      try {
        // Remove the course from the user's saved courses
        const updatedUser = await User.findByIdAndUpdate(
          user._id,
          { $pull: { courses: courseId } },
          { new: true }
        );
        pubsub.publish("SAVED_COURSES_UPDATED", {
          savedCoursesUpdated: updatedUser.courses,
        });

        return updatedUser;
      } catch (error) {
        throw new Error("Failed to remove course");
      }
    },

    createCourse: async (parent, { name, description }) => {
      return await Course.create({ name, description });
    },
    updateCourse: async (parent, { id, name, description }) => {
      return await Course.findByIdAndUpdate(
        id,
        { name, description },
        { new: true }
      );
    },
    deleteCourse: async (parent, { id }) => {
      return await Course.findByIdAndDelete(id);
    },
    createComment: async (
      parent,
      { user, comment, title, resource, course }
    ) => {
      return await Comment.create({ user, comment, title, resource, course });
    },
    updateComment: async (
      parent,
      { id, user, comment, title, commentn, resource, course }
    ) => {
      return await Comment.findByIdAndUpdate(
        id,
        { user, comment, title, commentn, resource, course },
        { new: true }
      );
    },
    deleteComment: async (parent, { id }) => {
      return await Comment.findByIdAndDelete(id);
    },
    createResource: async (
      parent,
      { name, video, text, description, link }
    ) => {
      return await Resource.create({ name, video, text, description, link });
    },
    updateResource: async (
      parent,
      { name, video, text, description, link }
    ) => {
      return await Resource.findOneAndUpdate(
        { name },
        { name, video, text, description, link },
        { new: true }
      );
    },
    deleteResource: async (parent, { name }) => {
      return await Resource.findOneAndDelete({ name });
    },
    createTag: async (parent, { name }) => {
      return await Tag.create({ name });
    },
    updateTag: async (parent, { id, name }) => {
      return await Tag.findByIdAndUpdate(id, { name }, { new: true });
    },
    deleteTag: async (parent, { id }) => {
      return await Tag.findByIdAndDelete(id);
    },
  },
  User: {
    courses: async (parent) => {
      return await Course.find({ _id: { $in: parent.courses } });
    },
    resources: async (parent) => {
      return await Resource.find({ user: parent._id });
    },
    comments: async (parent) => {
      return await Comment.find({ user: parent._id });
    },
    tags: async (parent) => {
      return await Tag.find({ _id: { $in: parent.tags } });
    },
  },
  Course: {
    users: async (parent) => {
      return await User.find({ courses: parent._id });
    },
    comments: async (parent) => {
      return await Comment.find({ course: parent._id });
    },
    resources: async (parent) => {
      const courseId = parent._id.toString();
      const course = await Course.findById(courseId).populate("resources");
      const resources = course.resources;

      return resources;
    },
    tags: async (parent) => {
      return await Tag.find({ _id: { $in: parent.tags } });
    },
  },
  Comment: {
    user: async (parent) => {
      return await User.findById(parent.user);
    },
    resource: async (parent) => {
      return await Resource.findById(parent.resource);
    },
    course: async (parent) => {
      return await Course.findById(parent.course);
    },
  },
  Resource: {
    _id: (parent) => parent._id,
    user: async (parent) => {
      return await User.findById(parent.user);
    },
    comments: async (parent) => {
      return await Comment.find({ resource: parent._id });
    },
    tags: async (parent) => {
      return await Tag.find({ _id: { $in: parent.tags } });
    },
  },
  Tag: {
    courses: async (parent) => {
      return await Course.find({ tags: parent._id });
    },
    resources: async (parent) => {
      return await Resource.find({ tags: parent._id });
    },
  },
};

module.exports = resolvers;
