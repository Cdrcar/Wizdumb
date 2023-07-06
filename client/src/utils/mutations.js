import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      _id
      name
      email
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $name: String!, $lo: String!) {
    updateUser(id: $id, name: $name, email: $email) {
      _id
      name
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      _id
      name
      email
    }
  }
`;

export const CREATE_COURSE = gql`
  mutation createCourse($name: String!, $description: String!) {
    createCourse(name: $name, description: $description) {
      _id
      name
      description
    }
  }
`;

export const UPDATE_COURSE = gql`
  mutation updateCourse($id: ID!, $name: String!, $description: String!) {
    updateCourse(id: $id, name: $name, description: $description) {
      _id
      name
      description
    }
  }
`;

export const DELETE_COURSE = gql`
  mutation deleteCourse($id: ID!) {
    deleteCourse(id: $id) {
      _id
      name
      description
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment(
    $user: ID!
    $comment: String!
    $resource: ID!
    $course: ID!
  ) {
    createComment(
      user: $user
      comment: $comment
      resource: $resource
      course: $course
    ) {
      _id
      user {
        _id
        name
        email
      }
      comment
      resource {
        _id
        name
      }
      course {
        _id
        name
      }
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment(
    $id: ID!
    $user: ID!
    $comment: String!
    $resource: ID!
    $course: ID!
  ) {
    updateComment(
      id: $id
      user: $user
      comment: $comment
      resource: $resource
      course: $course
    ) {
      _id
      user {
        _id
        name
        email
      }
      comment
      resource {
        _id
        name
      }
      course {
        _id
        name
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($id: ID!) {
    deleteComment(id: $id) {
      _id
      user {
        _id
        name
        email
      }
      comment
      resource {
        _id
        name
      }
      course {
        _id
        name
      }
    }
  }
`;

export const CREATE_RESOURCE = gql`
  mutation createResource(
    $name: String!
    $video: String!
    $text: String!
    $description: String!
    $link: String!
    $user: ID!
    $course: ID!
  ) {
    createResource(
      name: $name
      video: $video
      text: $text
      description: $description
      link: $link
      user: $user
     course: $course
    ) {
      _id
      name
      video
      text
      description
      link
      user {
        _id
        name
        email
      }
      course {
        _id
        name
        description
      }
    }
  }
`;

export const UPDATE_RESOURCE = gql`
  mutation updateResource(
    $id: ID!
    $name: String!
    $video: String!
    $text: String!
    $description: String!
    $link: String!
    $user: ID!
    $course: ID!
  ) {
    updateResource(
      id: $id
      name: $name
      video: $video
      text: $text
      description: $description
      link: $link
      user: $user
      course: $course
    ) {
      _id
      name
      video
      text
      description
      link
      user {
        _id
        name
        email
      }
      course {
        _id
        name
        description
      }
    }
  }
`;

export const DELETE_RESOURCE = gql`
  mutation deleteResource($id: ID!) {
    deleteResource(id: $id) {
      _id
      name
      video
      text
      description
      link
      user {
        _id
        name
        email
      }
      course {
        _id
        name
        description
      }
    }
  }
`;

export const CREATE_TAG = gql`
  mutation createTag($name: String!) {
    createTag(name: $name) {
      _id
      name
    }
  }
`;

export const UPDATE_TAG = gql`
  mutation updateTag($id: ID!, $name: String!) {
    updateTag(id: $id, name: $name) {
      _id
      name
    }
  }
`;

export const DELETE_TAG = gql`
  mutation deleteTag($id: ID!) {
    deleteTag(id: $id) {
      _id
      name
    }
  }
`;
