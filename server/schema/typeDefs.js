const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Course {
    id: ID!
    name: String!
    description: String!
    users: [User!]!
    comments: [Comment!]!
    resources: [Resource!]!
    tags: [Tag!]!
  }

  type Comment {
    id: ID!
    user: User!
    comment: String!
    resource: [Resource!]!
    course: [Course!]!
    createdAt: String!
    updatedAt: String!
  }

  type Resource {
    id: ID!
    name: String!
    video: String
    text: String
    description: String!
    link: String
    comments: [Comment!]!
    user: User!
    createdAt: String!
    updatedAt: String!
  }

  type Tag {
    id: ID!
    name: String
    createdAt: String!
    updatedAt: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    courses: [Course!]!
    resources: [Resource!]!
    comments: [Comment!]!
    tags: [Tag!]!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User!]!
    getCourse(id: ID!): Course
    getCourses: [Course!]!
    getComment(id: ID!): Comment
    getComments: [Comment!]!
    getResource(id: ID!): Resource
    getResources: [Resource!]!
    getTag(id: ID!): Tag
    getTags: [Tag!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    updateUser(id: ID!, name: String, email: String): User!
    deleteUser(id: ID!): User!
    createCourse(name: String!, description: String!): Course!
    updateCourse(id: ID!, name: String, description: String): Course!
    deleteCourse(id: ID!): Course!
    createComment(
      user: ID!
      comment: String!
      resource: ID!
      course: ID!
    ): Comment!
    updateComment(
      id: ID!
      user: ID
      comment: String
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
      course: ID!
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
