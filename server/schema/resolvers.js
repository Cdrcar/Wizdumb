const { User, Course, Comment, Resource, Tag } = require("./models");

const resolvers = {
  Query: {
    getUser: (parent, { id }) => User.findById(id),
    getUsers: () => User.find(),
    getCourse: (parent, { id }) => Course.findById(id),
    getCourses: () => Course.find(),
    getComment: (parent, { id }) => Comment.findById(id),
    getComments: () => Comment.find(),
    getResource: (parent, { id }) => Resource.findById(id),
    getResources: () => Resource.find(),
    getTag: (parent, { id }) => Tag.findById(id),
    getTags: () => Tag.find(),
  },
  Mutation: {
    createUser: (parent, { name, email }) => User.create({ name, email }),
    updateUser: (parent, { id, name, email }) =>
      User.findByIdAndUpdate(id, { name, email }, { new: true }),
    deleteUser: (parent, { id }) => User.findByIdAndDelete(id),
    createCourse: (parent, { name, description }) =>
      Course.create({ name, description }),
    updateCourse: (parent, { id, name, description }) =>
      Course.findByIdAndUpdate(id, { name, description }, { new: true }),
    deleteCourse: (parent, { id }) => Course.findByIdAndDelete(id),
    createComment: (parent, { user, comment, resource, course }) =>
      Comment.create({ user, comment, resource, course }),
    updateComment: (parent, { id, user, comment, resource, course }) =>
      Comment.findByIdAndUpdate(
        id,
        { user, comment, resource, course },
        { new: true }
      ),
    deleteComment: (parent, { id }) => Comment.findByIdAndDelete(id),
    createResource: (
      parent,
      { name, video, text, description, link, user, course }
    ) =>
      Resource.create({ name, video, text, description, link, user, course }),
    updateResource: (
      parent,
      { id, name, video, text, description, link, user, course }
    ) =>
      Resource.findByIdAndUpdate(
        id,
        { name, video, text, description, link, user, course },
        { new: true }
      ),
    deleteResource: (parent, { id }) => Resource.findByIdAndDelete(id),
    createTag: (parent, { name }) => Tag.create({ name }),
    updateTag: (parent, { id, name }) =>
      Tag.findByIdAndUpdate(id, { name }, { new: true }),
    deleteTag: (parent, { id }) => Tag.findByIdAndDelete(id),
  },
  User: {
    courses: (parent) => Course.find({ users: parent.id }),
    resources: (parent) => Resource.find({ user: parent.id }),
    comments: (parent) => Comment.find({ user: parent.id }),
    tags: (parent) => Tag.find({}),
  },
  Course: {
    users: (parent) => User.find({ courses: parent.id }),
    comments: (parent) => Comment.find({ course: parent.id }),
    resources: (parent) => Resource.find({ course: parent.id }),
    tags: (parent) => Tag.find({}),
  },
  Comment: {
    user: (parent) => User.findById(parent.user),
    resource: (parent) => Resource.findById(parent.resource),
    course: (parent) => Course.findById(parent.course),
  },
  Resource: {
    user: (parent) => User.findById(parent.user),
    course: (parent) => Course.findById(parent.course),
    comments: (parent) => Comment.find({ resource: parent.id }),
    tags: (parent) => Tag.find({}),
  },
  Tag: {
    courses: (parent) => Course.find({ tags: parent.id }),
    resources: (parent) => Resource.find({ tags: parent.id }),
  },
};

module.exports = resolvers;
