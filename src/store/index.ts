import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { reducer as toastrReducer } from "react-redux-toastr";

export const store = configureStore({
  reducer: {
    toastr: toastrReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
