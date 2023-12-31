const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Course {
    _id: ID!
    name: String!
    description: String!
    icon: String!
    modules: [String!]
    users: [User!]!
    comments: [Comment!]!
    resources: [Resource!]!
    tags: [Tag!]!
    createdAt: String!
    updatedAt: String!
  }

  type Comment {
    _id: ID!
    user: User!
    title: String!
    like: [ID]
    commentn: [ID]
    comment: String!
    resource: Resource
    course: Course
    createdAt: String!
    updatedAt: String!
  }

  type Resource {
    _id: ID!
    name: String!
    video: String
    text: String
    description: String!
    link: String
    user: User!
    comments: [Comment!]!
    tags: [Tag!]!
    createdAt: String!
    updatedAt: String!
  }

  type Tag {
    _id: ID!
    name: String
    courses: [Course!]!
    resources: [Resource!]!
    createdAt: String!
    updatedAt: String!
  }

  type User {
    _id: ID!
    firstName: String
    lastName: String
    username: String
    email: String!
    password: String!
    aboutMe: String
    location: String
    topSkills: String
    profilePhoto: String
    courses: [Course!]
    resources: [Resource!]
    comments: [Comment!]
    tags: [Tag!]
    createdAt: String
    updatedAt: String
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    aboutMe: String
    location: String
    topSkills: String
    profilePhoto: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User!]!
    getCourse(id: ID!): Course
    getCourses: [Course!]
    getComment(id: ID!): Comment
    getComments: [Comment!]!
    getResource(id: ID!): Resource
    getResources: [Resource!]!
    getTag(id: ID!): Tag
    getTags: [Tag!]!
    me: User
  }

  type Mutation {
    createUser(
      firstName: String
      lastName: String
      email: String!
      password: String!
      username: String
    ): Auth
    updateUserProfile(input: UpdateUserInput!): Auth
    loginUser(email: String!, password: String!): Auth
    updateUser(
      id: ID!
      firstName: String
      lastName: String
      email: String
      comments: String
      commentReply: String
      likedComment: String
    ): User!
    deleteUser(id: ID!): User!
    createCourse(name: String!, description: String!): Course!
    updateCourse(id: ID!, name: String, description: String): Course!
    deleteCourse(id: ID!): Course!
    saveCourse(courseId: ID!): User!

    removeSavedCourse(courseId: ID!): User!

    createComment(
      user: ID!
      comment: String!
      title: String!
      like: [ID]
      commmentn: [ID]
      resource: ID
      course: ID
    ): Comment!
    updateComment(
      id: ID!
      user: ID
      comment: String
      title: String!
      like: [ID]
      commmentn: [ID]
      resource: ID
      course: ID
    ): Comment!
    deleteComment(id: ID!): Comment!
    createResource(
      name: String!
      video: String
      text: String
      description: String!
      link: String
      user: ID!
      course: ID
    ): Resource!
    updateResource(
      id: ID!
      name: String
      video: String
      text: String
      description: String
      link: String
      user: ID
      course: ID
    ): Resource!
    deleteResource(id: ID!): Resource!
    createTag(name: String): Tag!
    updateTag(id: ID!, name: String): Tag!
    deleteTag(id: ID!): Tag!
  }
`;

module.exports = typeDefs;
