import { createSlice, nanoid } from "@reduxjs/toolkit";

// Global data
const initialState = {
    todos: [
        {id: 1, text: 'Setup Redux Structure', completed: false}
    ]
};

// Slice functions
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // Action: Add a new todo
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload, // payload - it carries a data from FORM and add it in our array
                completed: false
            }
            state.todos.push(newTodo);
        },

        // Action: Delete a todo by ID
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },

        // Action: Toggle Completion status
        toggleComplete: (state, action) => {
            const todo = state.todos.find(t => t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },

        // Action: Update a todo's text
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todo = state.todos.find(t => t.id === id);
            if(todo){
                todo.text = newText;
            }
        }
    }
});

export const { addTodo, deleteTodo, toggleComplete, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;