// store/slices/homeSlice.ts
import {
  createSlice,
  createAsyncThunk,
  createAction,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

// Types
export interface Article {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  title: string;
  desc: string;
  image: string;
  pin: boolean;
}

export interface Course {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  Name: string;
  Description: string;
  Price: number;
  Image: string;
  About: string;
  Lession: string;
  pin?: boolean;
}

// Unified state
export interface HomeState {
  articles: Article[];
  courses: Course[];
  loading: boolean;
  error: string | null;
}

const URI = process.env.EXPO_PUBLIC_API_URL;

// Thunks
export const fetchArticles = createAsyncThunk(
  "home/fetchArticles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${URI}/articles`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const fetchCourses = createAsyncThunk(
  "home/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${URI}/courses`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

// Initial state
const initialState: HomeState = {
  articles: [],
  courses: [],
  loading: false,
  error: null,
};

// Slice
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    togglePinArticle: (state, action: PayloadAction<string>) => {
      const article = state.articles.find(
        (a) => a.ID.toString() === action.payload
      );
      if (article) {
        article.pin = !article.pin;
      }
    },
    togglePinCourse: (state, action: PayloadAction<string>) => {
      const course = state.courses.find(
        (c) => c.ID.toString() === action.payload
      );
      if (course) {
        course.pin = !course.pin;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Articles
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Courses
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { togglePinArticle, togglePinCourse } = homeSlice.actions;
export default homeSlice.reducer;
