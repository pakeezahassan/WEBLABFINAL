import { createSlice } from "@reduxjs/toolkit";
import { getRocketsAction } from "../actions/rockets.actions"
 

const initialState = {
    loading: true,
    error: undefined,
    data: [],
  };
 
  const processLoadingReducer = (state) => {
    state.loading = true;
  };

  const processErrorReducer = (
    state,
    { payload }
  ) => {
    state.loading = false;
    state.error = payload;
  };

export const rocketsSlice = createSlice({
    name: "rockets",
    initialState,
    reducers: {
    },
    extraReducers: {
        [getRocketsAction.pending.type]: processLoadingReducer,
        [getRocketsAction.rejected.type]: processErrorReducer,
        [getRocketsAction.fulfilled.type]: (state, { payload}) => {
            state.loading = false;
            state.data = payload;
            state.error = undefined;
        }
    }  
});

export const rocketsSliceReducer = rocketsSlice.reducer;