import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
};

export const stepSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    forwardStep: (state) => {
      state.step += 1;
    },
    backwardStep: (state) => {
      state.step -= 1;
    },
    homeStep: (state) => {
      state.step = 0;
    },
    openStep: (state) => {
      state.step = 10;
    },
    processStep: (state) => {
      state.step = 20;
    },
    completeStep: (state) => {
      state.step = 30;
    },
    preparationStep: (state) => {
      state.step = 40;
    },
  },
});

export const {
  forwardStep,
  backwardStep,
  homeStep,
  openStep,
  processStep,
  completeStep,
  preparationStep,
} = stepSlice.actions;

export default stepSlice.reducer;
