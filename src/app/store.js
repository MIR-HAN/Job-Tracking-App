import { configureStore } from "@reduxjs/toolkit";
import JobReducer from "./slices/jobSlice"

export default configureStore({
    reducer:JobReducer,
});