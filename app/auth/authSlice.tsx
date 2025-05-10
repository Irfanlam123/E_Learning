import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  name?: string;
  email: string;
  mobile?: string;
  address?: string;
  password: string;
  image?: string;
  role?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const URI = process.env.EXPO_PUBLIC_API_URL;

// ➡️ **Async Thunk for Signup**
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData: User, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${URI}/signup`, userData);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ➡️ **Async Thunk for Login**
export const loginUser = createAsyncThunk(
  "auth/loginUser", // Changed from `signupUser` to `loginUser`
  async (loginData: Pick<User, "email" | "password" >, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${URI}/login`, loginData); // Changed from `/signup` to `/login`
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ➡️ Signup Reducers
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ➡️ Login Reducers
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
