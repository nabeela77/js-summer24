import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    clearSmartSearchQuery: (state) => {
      state.query = "";
    },
  },
});

export const { setSearchQuery, clearSmartSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
