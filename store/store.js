import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import users from "./userSlice";
import counter from "./counterSlice";
import steps from "./stepSlice";
import invoice from "./invoiceSlice";
import receiver from "./receiverSlice";
import postInvoice from "./postInvoiceSlice";

const combineReducer = combineReducers({
  counter,
  users,
  steps,
  invoice,
  receiver,
  postInvoice,
});

export const makeStore = () =>
  configureStore({
    reducer: combineReducer,
  });

export const wrapper = createWrapper(makeStore);
