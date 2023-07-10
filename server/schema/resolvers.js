const { AuthenticationError } = require('apollo-server-express');
const { User, Course, Comment, Resource, Tag } = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getUser: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      return await User.findById(context.user._id);
    },
    getUsers: async () => {
      return await User.find();
    },
    getCourse: async (parent, { id }) => {
      return await Course.findById(id);
    },
    getCourses: async () => {
      console.log("testing courses");
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
        throw new AuthenticationError('You need to be logged in!');
      }

      return await User.findById(context.user._id).populate('thoughts');
    },
  },
  Mutation: {
    createUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Invalid email or password');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Invalid email or password');
      }

      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, { id, firstName, lastName, email }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }
      
      return await User.findByIdAndUpdate(id, { firstName, lastName, email }, { new: true });
    },
    deleteUser: async (parent, { id }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }
      
      return await User.findByIdAndDelete(id);
    },
    createCourse: async (parent, { name, description }) => {
      return await Course.create({ name, description });
    },
    updateCourse: async (parent, { id, name, description }) => {
      return await Course.findByIdAndUpdate(id, { name, description }, { new: true });
    },
    deleteCourse: async (parent, { id }) => {
      return await Course.findByIdAndDelete(id);
    },
    createComment: async (parent, { user, comment, resource, course }) => {
      return await Comment.create({ user, comment, resource, course });
    },
    updateComment: async (parent, { id, user, comment, resource, course }) => {
      return await Comment.findByIdAndUpdate(id, { user, comment, resource, course }, { new: true });
    },
    deleteComment: async (parent, { id }) => {
      return await Comment.findByIdAndDelete(id);
    },
    createResource: async (parent, { name, video, text, description, link, user, course }) => {
      return await Resource.create({ name, video, text, description, link, user, course });
    },
    updateResource: async (parent, { id, name, video, text, description, link, user, course }) => {
      return await Resource.findByIdAndUpdate(id, { name, video, text, description, link, user, course }, { new: true });
    },
    deleteResource: async (parent, { id }) => {
      return await Resource.findByIdAndDelete(id);
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
      return await Course.find({ users: parent._id });
    },
    resources: async (parent) => {
      return await Resource.find({ user: parent._id });
    },
    comments: async (parent) => {
      return await Comment.find({ user: parent._id });
    },
    tags: async (parent) => {
      return await Tag.find();
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
      return await Resource.find({ course: parent._id });
    },
    tags: async () => {
      return await Tag.find();
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
    user: async (parent) => {
      return await User.findById(parent.user);
    },
    course: async (parent) => {
      return await Course.findById(parent.course);
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
