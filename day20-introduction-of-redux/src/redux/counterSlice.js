import { createSlice } from "@reduxjs/toolkit";

// Global State
const initialState = {
    value: 0
};

// State Update Function
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // increment function
        increment: (state) => {
            state.value += 1;  // pre increment
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;