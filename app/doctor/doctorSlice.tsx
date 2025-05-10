// src/redux/slices/doctorSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Doctor {
  ID: number;
  name: string;
  specialization: string;
  phone: string;
  email: string;
  image: string;
  fee: number;
  schedule: string;
  availability: string;
  created_at: string; // or Date if you parse it
}

interface DoctorState {
  doctors: Doctor[];
  loading: boolean;
  error: string | null;
}

const initialState: DoctorState = {
  doctors: [],
  loading: false,
  error: null,
};
const URI=process.env.EXPO_PUBLIC_API_URL;

// Async action using Axios
export const fetchDoctors = createAsyncThunk<Doctor[]>(
  "doctors/fetchDoctors",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${URI}/doctors`);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to fetch doctors");
    }
  }
);

const doctorSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default doctorSlice.reducer;
