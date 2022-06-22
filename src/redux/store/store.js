import { configureStore } from "@reduxjs/toolkit";
import todoSlicer from "../slicer/todoSlicer";

const store = configureStore({
  reducer: {
    todo: todoSlicer,
  },
});

export default store;
