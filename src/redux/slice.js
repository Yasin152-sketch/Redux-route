// import { createSlice } from "@reduxjs/toolkit";
// const getintialCart = () => {
//   try {
//     const data = localStorage.getItem("cart");
//     return data ? JSON.parse(data) : [];
//   } catch {
//     return [];
//   }
// };

// const initialState = {
//   items: getintialCart(),
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addTocart: (state, action) => {
//       state.items.push(action.payload);
//       localStorage.setItem("cart", JSON.stringify(state.items));
//     },

//     removeItem: (state, action) => {
//       const cartdata = state.items.filter(
//         (item) => item.id !== action.payload.id,
//       );
//       state.items = cartdata;
//       localStorage.setItem("cart", JSON.stringify(cartdata));
//     },
//     clearItem: (state) => {
//       state.items = [];
//       localStorage.setItem("cart", JSON.stringify([]));
//     },
//   },
// });

// export const { addTocart, removeItem, clearItem } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const getintialCart = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};
const initialState = {
  items: getintialCart(),
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeitem: (state, action) => {
      const cartdata = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.items = cartdata;
      localStorage.setItem("cart", JSON.stringify(cartdata));
    },

    clearItem: (state, action) => {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify([]));
    },
    // updateQuantity: (state, action) => {
    //   const { id, quantity } = action.payload;
    //   const item = state.items.find((i) => i.id === id);
    //   if (item) {
    //     item.quantity = quantity;
    //   }
    // },
    updateQuantity : (state,action) =>{
      const {id,quantity} = action.payload;
      const item = state.items.find((i) => i.id === id)
      if(item){
        item.quantity = quantity
      }
    }
  },
});

export const { addTocart, removeitem, clearItem,updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
