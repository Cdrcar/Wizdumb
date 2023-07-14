import { configureStore } from '@reduxjs/toolkit';


const initialState = {
  courses: [],
  resources: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'courses/setCourses':
      return {
        ...state,
        courses: action.payload,
      };
      case 'resources/setResources': // Add resources case
      return {
        ...state,
        resources: action.payload,
      };
    default:
      return state;
  }
};


const store = configureStore({
  reducer: rootReducer,
});

export default store;
