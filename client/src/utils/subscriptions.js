import { gql } from "@apollo/client";

export const SAVED_COURSES_UPDATED = gql`
  subscription SavedCoursesUpdated {
    savedCoursesUpdated {
      _id
      name
      description
    }
  }
`;
