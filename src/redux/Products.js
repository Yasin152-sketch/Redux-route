// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// export const productfetch = createAsyncThunk("products", async () => {
//   const url = await fetch("https://dummyjson.com/products");
//   const res = await url.json();
//   return res.products;
// });

// const initialState = {
//   item: [],
//   error: null,
//   status: undefined,
// };

// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(productfetch.fulfilled, (state, action) => {
//       ((state.status = "successed"), (state.item = action.payload));
//     });
//   },
// });

// export default productSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const productfetch = createAsyncThunk("products", async () => {
  const url = await fetch("https://dummyjson.com/products");
  const res = await url.json();
  return res.products;
});

const initialState = {
  item: [],
  erorr: null,
  status: undefined,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (buidler) => {
    buidler.addCase(productfetch.fulfilled, (state, action) => {
      ((state.item = action.payload),
        (state.status = "sucessfully loaded on here!"));
    });
  },
});

export default productSlice.reducer;