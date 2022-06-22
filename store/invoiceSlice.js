import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  // data: {},
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = [...state.data, action.payload];
      // state.data = action.payload;
    },
    rawSalesOrder: (state, action) => {
      state.data = [...state.data, action.payload];
      // state.data = action.payload;
    },
    cleanData: (state) => {
      state.data = [];
    },
  },
});

export const { addData, rawSalesOrder, cleanData } = invoiceSlice.actions;

export default invoiceSlice.reducer;
