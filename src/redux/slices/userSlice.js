import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsersApi } from "../../utils/api";
import { PER_PAGE_USERS } from "../../constants/Stack";
import { strings } from "../../theme";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (page, thunkAPI) => {
    try {
      const response = await fetchUsersApi(page);
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message === "Network Error"
          ? strings.checkInternetConnection
          : error.message
      );
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    hasNextPage: true,
    page: 1,
    error: null,
    refreshing: false,
  },
  reducers: {
    increamentPage(state) {
      state.page += 1;
    },
    resetPage(state) {
      state.page = 1;
      state.refreshing = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.refreshing = false;
        state.users =
          state.page > 1 ? [...state.users, ...action.payload] : action.payload;
        state.hasNextPage =
          action.payload.length > 0 && action.payload.length < PER_PAGE_USERS
            ? false
            : true;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.refreshing = false;
      });
  },
});

export const { resetPage, increamentPage } = userSlice.actions;

export default userSlice.reducer;
