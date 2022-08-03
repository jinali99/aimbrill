import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};
export const addSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addpro: (state, action) => {
      state.product = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { addpro } = addSlice.actions;

export default addSlice.reducer;
