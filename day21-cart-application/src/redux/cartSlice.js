import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Logic for Add to Cart
        addtoCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(p => p.id === item.id);
            // Actual Cart Logic
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
            state.totalAmount += item.price;
        },

        removefromCart: (state, action) => {
            const id = action.payload;
            const item = state.items.find(p => p.id === id);
            if (item) {
                state.totalAmount -= item.price * item.quantity;
                state.items = state.items.filter(p => p.id !== id);
            }
        }
    }
})

export const { addtoCart, removefromCart } = cartSlice.actions;
export default cartSlice.reducer;