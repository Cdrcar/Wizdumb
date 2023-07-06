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

  export const QUERY_SINGLE_COURSE = gql `
  query getSingleCourse($id: ID!) {
    getCourse(id: $id) {
        _id
        name
        description
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

  export const QUERY_COURSES = gql `
  query getCourses {
    getCourses {
         _id
        name
        description
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

  export const QUERY_SINGLE_COMMENT = gql `
  query getSingleComment($id: ID!) {
    getComment(id:$id) {
        _id
        user {
            username
        }
        comment
        resource {
            name
        }
        course {
            name
        }
        createdAt
        updatedAt
    }
  }
  `;

  export const QUERY_ALL_COMMENTS = gql `
  query getComments {
    getComments {
        _id
        user {
            username
        }
        comment
        resource {
            name
        }
        course {
            name
        }
        createdAt
        updatedAt
    }
  }`;

  export const QUERY_SINGLE_RESOURCE = gql `
  query getSingleResource($id: ID!) {
    getResource(id:$id) {
        _id
        name
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

export const QUERY_RESOURCE = gql `
  query getResources {
    getResources {
        _id
        name
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

export const QUERY_SINGLE_TAG = gql `
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

export const QUERY_TAGS = gql `
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


