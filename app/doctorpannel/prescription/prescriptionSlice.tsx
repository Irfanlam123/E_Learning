// app/prescriptions/prescriptionSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Medication {
  id: number;
  name: string;
  dosage: string;
  form: string;
  frequency: string;
  duration: string;
  special_instructions?: string;
  before_after_food?: string;
}

export interface Prescription {
  id: number;
  patient_id: number;
  doctor_id: number;
  patient_name: string;
  doctor_name: string;
  pdf_path: string;
  medications: Medication[];
  createdAt?: string;
  updatedAt?: string;
}

interface PrescriptionState {
  prescriptions: Prescription[];
  loading: boolean;
  error: string | null;
}

const initialState: PrescriptionState = {
  prescriptions: [],
  loading: false,
  error: null,
};

const URI = process.env.EXPO_PUBLIC_API_URL;

// 🔄 **Thunk to fetch prescriptions**
export const fetchPrescriptions = createAsyncThunk(
  "prescriptions/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${URI}/prescriptions`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch prescriptions"
      );
    }
  }
);

// ✍️ **Thunk to create a new prescription**
export const createPrescription = createAsyncThunk(
  "prescriptions/create",
  async (newPrescription: Omit<Prescription, "id">, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${URI}/prescription`, newPrescription);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create prescription"
      );
    }
  }
);

const prescriptionSlice = createSlice({
  name: "prescription",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch all
    builder
      .addCase(fetchPrescriptions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPrescriptions.fulfilled, (state, action) => {
        state.loading = false;
        state.prescriptions = action.payload;
      })
      .addCase(fetchPrescriptions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Create new
    builder
      .addCase(createPrescription.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPrescription.fulfilled, (state, action) => {
        state.loading = false;
        state.prescriptions.push(action.payload);
      })
      .addCase(createPrescription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default prescriptionSlice.reducer;
