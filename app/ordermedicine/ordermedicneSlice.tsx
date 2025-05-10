// types/articleTypes.ts
import {
    createAction,
    createAsyncThunk,
    createSlice,
    PayloadAction,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  
  
  
  export interface Medicine {
    id: string;
    name: string;
    type: string;
    price: number;
    stock: boolean;
    image: string;  // ✅ This should be 'image' not 'Image'
    quantity: number;
  }
  
  export interface ArticlesState {
    medicines: Medicine[];
    loading: boolean;
    error: string | null;
  }
  
  // store/slices/articlesSlice.ts
  
  const initialState: ArticlesState = {
    medicines: [],
    loading: false,
    error: null,
  };
  const URI=process.env.EXPO_PUBLIC_API_URL;
  export const fetchMedicines = createAsyncThunk(
    "medicines/fetchMedicines",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${URI}/medicines`);
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.message);
        }
        return rejectWithValue("An unknown error occurred");
      }
    }
  );
  
  const medicineSlice = createSlice({
    name: "medicine",
    initialState,
    reducers: {
    //   togglePin: (state, action: PayloadAction<string>) => {
    //     const article = state.articles.find(
    //       (a) => a.ID.toString() === action.payload
    //     );
    //     if (article) {
    //       article.pin = !article.pin;
    //     }
    //   },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchMedicines.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchMedicines.fulfilled, (state, action) => {
          state.loading = false;
          state.medicines = action.payload;
        })
        .addCase(fetchMedicines.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    },
  });
//   export const togglePinArticle = createAction<string>("article/togglePin");
  export default medicineSlice.reducer;
  