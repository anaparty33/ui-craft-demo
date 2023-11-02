import { configureStore } from "@reduxjs/toolkit";
import coordinateReducer from "./features/coordinatesSlice";
import unitReducer from './features/unitSlice'


export const store = configureStore({
  reducer: {
    coordinates: coordinateReducer,
    unit: unitReducer,
  },
  
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
