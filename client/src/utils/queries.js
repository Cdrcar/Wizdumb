import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      username
      email
      aboutMe
      location
      topSkills
      profilePhoto
      courses {
        _id
        name
      }
      resources {
        _id
        name
        description
      }
      comments {
        _id
        comment
      }
      tags {
        _id
        name
      }
    }
  }
`;

export const QUERY_USER = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      _id
      username
      firstName
      lastName
      email
      aboutMe
      location
      topSkills
      profilePhoto
      courses {
        _id
        name
      }
      resources {
        _id
        name
        description
      }
      comments {
        _id
        comment
      }
      commentReply {
        _id
      }
      likedComment {
        _id
      }
      tags {
        _id
        name
      }
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  query getAllUsers {
    getUsers {
      _id
      username
      email
      aboutMe
      location
      topSkills
      profilePhoto
      courses {
        _id
        name
      }
      resources {
        _id
        name
        description
      }
      comments {
        _id
        comment
      }
      commentReply {
        _id
      }
      likedComment {
        _id
      }
      tags {
        _id
        name
      }
    }
  }
`;

export const QUERY_SINGLE_COURSE = gql`
  query getSingleCourse($id: ID!) {
    getCourse(id: $id) {
      _id
      name
      description
      icon
      modules
      users {
        _id
        username
      }
      comments {
        _id
        user {
          _id
          firstName
          lastName
          username
          email
        }
        comment
        resource {
          _id
          name
        }
      }
      resources {
        name
        description
      }
      tags {
        _id
        name
      }
    }
  }
`;

export const QUERY_COURSES = gql`
  query getCourses {
    getCourses {
      _id
      description
      icon
      modules
      name
      resources {
        description
        link
        name
        text
        video
        comments {
          comment
        }
      }
    }
  }
`;

export const QUERY_SINGLE_COMMENT = gql`
  query getComment($getCommentId: ID!) {
    getComment(id: $getCommentId) {
      _id
      title
      comment
      like
      commentn
      user {
        _id
        username
      }
    }
  }
`;

export const QUERY_ALL_COMMENTS = gql`
  query getComments {
    getComments {
      _id
      title
      comment
      like
      commentn
      user {
        username
      }
    }
  }
`;

export const QUERY_SINGLE_RESOURCE = gql`
  query getSingleResource($name: String!) {
    getResource(name: $name) {
      name
      video
      text
      description
      link
      comment
      user
    }
  }
`;

export const QUERY_RESOURCES = gql`
  query getResources {
    getResources {
      name
      video
      text
      description
      link
    }
  }
`;

export const QUERY_SINGLE_TAG = gql`
  query getSingleTag($id: ID!) {
    getTag(id: $id) {
      _id
      name
      course {
        name
      }
      resources {
        name
        description
      }
      createdAt
      updatedAt
    }
  }
`;

export const QUERY_TAGS = gql`
  query getAllTags {
    getTags {
      _id
      name
      course {
        name
      }
      resources {
        name
        description
      }
      createdAt
      updatedAt
    }
  }
`;
