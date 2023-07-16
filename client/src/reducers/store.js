import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  resources: [],
  comments: []
};

const commentSlice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    setComments: (state, action) => {
      
    console.log(commentSlice)
      return action.payload;
    },
  },
});

const coursesSlice = createSlice({
  name: 'courses',
  initialState: [],
  reducers: {
    setCourses: (state, action) => {
      return action.payload;
    },
  },
});

const resourcesSlice = createSlice({
  name: 'resources',
  initialState: [],
  reducers: {
    setResources: (state, action) => {
      return action.payload;
    },
  },
});

const rootReducer = {
  courses: coursesSlice.reducer,
  resources: resourcesSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export const { setCourses } = coursesSlice.actions;
export const { setResources } = resourcesSlice.actions;

export default store;
