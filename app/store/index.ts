import { Article } from "./../home/homeSlice";
import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../../app/doctorpannel/patient/patientSlice";
import articleReducer from "../home/homeSlice";
import authReducer from "../auth/authSlice";
import PrescriptionReducer from "../teacherpannel/prescription/prescriptionSlice";

export const store = configureStore({
  reducer: {
    patient: patientReducer,
    article: articleReducer,
    auth:authReducer,
    Prescription:PrescriptionReducer
  },
});

// Infer the RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
