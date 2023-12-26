import { createSlice } from "@reduxjs/toolkit";
import { getMissionsAction } from "../actions/missions.action";

const initialState = {
  loading: true,
  error: undefined,
  data: [],
};

const processLoadingReducer = (state) => {
  state.loading = true;
};

const processErrorReducer = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

export const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
  },
  extraReducers: {
    [getMissionsAction.pending.type]: processLoadingReducer,
    [getMissionsAction.rejected.type]: processErrorReducer,
    [getMissionsAction.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.error = undefined;
    },
  },
});

export const missionsSliceReducer = missionsSlice.reducer;
