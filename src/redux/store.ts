import { configureStore } from "@reduxjs/toolkit";
import { classReducer } from "./slices/class.slice";
import { studentReducer } from "./slices/student.slice";

export const store = configureStore({
  reducer: {
    class: classReducer,
    student: studentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
