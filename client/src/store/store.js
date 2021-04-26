import { configureStore } from '@reduxjs/toolkit';

import resourcesReducer from './resourcesSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    resources: resourcesReducer,
    user: userReducer
  }
});