import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  receiver: [],
};

export const receiverSlice = createSlice({
  name: "receiver",
  initialState,
  reducers: {
    addReceiver: (state, action) => {
      state.receiver = action.payload;
    },
  },
});

export const { addReceiver } = receiverSlice.actions;

export default receiverSlice.reducer;
