import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  items: [],
  totalQty: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      console.log(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item: any) => item.id != action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
