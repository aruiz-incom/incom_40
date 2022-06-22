import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const postInvoiceSlice = createSlice({
  name: "postInvoice",
  initialState,
  reducers: {
    response: (state, action) => {
      state.data = action.payload;
    },
    postCleanData: (state) => {
      state.data = {};
    },
  },
});

export const { response, postCleanData } = postInvoiceSlice.actions;

export default postInvoiceSlice.reducer;
