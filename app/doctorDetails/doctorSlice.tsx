import {
    createAction,
    createAsyncThunk,
    createSlice,
    PayloadAction,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  
  export interface Appointment {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    patient_id: number;
    doctor_id: number;
    appointment_date: string;
    status: string;
    schedule_id: number;
  }
  
  export interface AppointmentState {
    appointments: Appointment[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: AppointmentState = {
    appointments: [],
    loading: false,
    error: null,
  };
  
  const URI = process.env.EXPO_PUBLIC_API_URL; // ✅ Fetch from .env
  
  /**
   * Thunk to create an appointment with a doctor
   */
  export const createAppointment = createAsyncThunk<Appointment, Omit<Appointment, "ID" | "CreatedAt" | "UpdatedAt" | "DeletedAt">>(
    "appointments/createAppointment",
    async (appointmentData, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${URI}/appointment`, appointmentData);
        return response.data as Appointment;
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.message);
        }
        return rejectWithValue("An unknown error occurred");
      }
    }
  );
  
  const appointmentSlice = createSlice({
    name: "appointments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(createAppointment.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createAppointment.fulfilled, (state, action: PayloadAction<Appointment>) => {
          state.loading = false;
          state.appointments.push(action.payload);
        })
        .addCase(createAppointment.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    },
  });
  
  export default appointmentSlice.reducer;
  