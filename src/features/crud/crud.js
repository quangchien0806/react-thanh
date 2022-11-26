import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  listUser: [],
};

export const add = createAsyncThunk(
  "users/add",

  async (data, { rejectWithValue }) => {
    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();

    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(jsonData);
    }

    return jsonData;
  }
);

export const getList = createAsyncThunk(
  "users/getList",

  async (_, { rejectWithValue }) => {
    const response = await fetch("https://dummyjson.com/users");

    const jsonData = await response.json();

    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(jsonData);
    }

    return jsonData;
  }
);

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled, (state, action) => {
      state.listUser = action.payload;
    });
  },
});

export const selectListUser = (state) => state.user.listUser;
export default user.reducer;
