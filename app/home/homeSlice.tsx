// types/articleTypes.ts
import {
  createAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";



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

export interface ArticlesState {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

// store/slices/articlesSlice.ts

const initialState: ArticlesState = {
  articles: [],
  loading: false,
  error: null,
};
const URI=process.env.EXPO_PUBLIC_API_URL;
export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
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

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    togglePin: (state, action: PayloadAction<string>) => {
      const article = state.articles.find(
        (a) => a.ID.toString() === action.payload
      );
      if (article) {
        article.pin = !article.pin;
      }
    },
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});
export const togglePinArticle = createAction<string>("article/togglePin");
export default homeSlice.reducer;
