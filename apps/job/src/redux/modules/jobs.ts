import { createSlice } from "@reduxjs/toolkit";
import { JobType } from "../../types";
import { namespace } from "../utils";

const initialState: {
  data: JobType[];
  loading: boolean;
  error: Error | null;
} = {
  data: [],
  loading: false,
  error: null,
};

const {
  reducer,
  actions: { start, done, fail },
} = createSlice({
  name: namespace("jobs"),
  initialState,
  reducers: {
    start: (state) => {
      state.loading = true;
    },
    done: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default reducer;
export { start, done, fail };
