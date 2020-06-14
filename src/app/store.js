import { configureStore } from '@reduxjs/toolkit';
import marketingReducer from '../features/marketing/marketingSlice';
import videoReducer from '../features/theater/videoSlice';

export default configureStore({
  reducer: {
    marketing: marketingReducer,
    videos: videoReducer
  },
});
