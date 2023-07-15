import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      _id
      username
      email
      courses {
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
        courses {
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
      course {
            _id
            name
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
            user
            comment
            resource
        }
        resources {
            name
            description
    
        }
    }
  }`;

export const QUERY_COURSES = gql`
  query getCourses {
    getCourses {
      _id
      description
      icon
      modules
      name
      resources {
        text
        name
        user {
          username
        }
        comments {
          comment
        }
      }
    }
  }`;

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
}`;

export const QUERY_SINGLE_RESOURCE = gql`
  query getSingleResource($id: ID!) {
    getResource(id:$id) {
        _id
        name
        courseName
        video
        text
        description
        link
        comments {
            user
            comment
        }
        user {
            username
        }
        course {
            name
        }
        tag {
            name
        }
        createdAt
        UpdatedAt

    }
}`;

export const QUERY_RESOURCE = gql`
  query getResources {
    getResources {
        _id
        name
        courseName
        video
        text
        description
        link
        comments {
            user
            comment
        }
        user {
            username
        }
        course {
            name
        }
        tag {
            name
        }
        createdAt
        UpdatedAt

    }
}`;

export const QUERY_SINGLE_TAG = gql`
  query getSingleTag($id: ID!) {
    getTag(id:$id) {
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
        UpdatedAt

    }
}`;

export const QUERY_TAGS = gql`
  query getAllTags{
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
        UpdatedAt

    }
}`;


