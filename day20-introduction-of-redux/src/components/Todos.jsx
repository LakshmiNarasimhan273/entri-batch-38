import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addTodo,
    deleteTodo,
    toggleComplete,
    updateTodo
} from '../redux/todoSlice';

function Todos() {
  const [newTodoText, setNewTodoText] = useState('');
  const [editingId, setEditingId] = useState(null); // State to track which todo is being edited
  const [editText, setEditText] = useState('');     // State for the text being edited

  // Select the list of todos from the Redux store
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  // --- 1. ADD TODO LOGIC ---
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      dispatch(addTodo(newTodoText.trim()));
      setNewTodoText('');
    }
  };

  // --- 2. TOGGLE COMPLETE LOGIC (on single click) ---
  const handleToggle = (id) => dispatch(toggleComplete(id));

  // --- 3. DELETE TODO LOGIC ---
  const handleDelete = (id) => dispatch(deleteTodo(id));

  // --- 4. EDIT LOGIC ---
  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = () => {
    if (editText.trim() && editingId) {
      dispatch(updateTodo({ id: editingId, newText: editText.trim() }));
    }
    setEditingId(null); // Exit editing mode
    setEditText('');
  };


  return (
    // Minimalist Light Theme: bg-gray-100 body, bg-white container
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-8">
     
      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
          To-Do List
        </h1>
       
        {/* TO-DO FORM (CREATE) */}
        <form onSubmit={handleAddTodo} className="flex space-x-2 mb-8">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-150"
          />
          <button
            type="submit"
            className="px-5 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md"
          >
            Add
          </button>
        </form>

        {/* TO-DO LIST (VIEW, TOGGLE, EDIT, DELETE) */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center py-6">
              Your list is clean! Add a task above.
            </p>
          ) : (
            <div>
            {

            
            todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm transition duration-150 hover:shadow-md"
              >
               
                {/* Task Content Area */}
                <div className="flex-grow pr-4">
                  {editingId === todo.id ? (
                    // --- EDIT MODE ---
                    <input
                    type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onBlur={handleUpdate} // Save on blur
                      onKeyPress={(e) => { if (e.key === 'Enter') handleUpdate(); }} // Save on Enter
                      className="w-full p-1 border-b border-indigo-500 focus:outline-none text-gray-800"
                      autoFocus
                    />
                    ) : (
                    // --- VIEW MODE (Single-click to toggle, Double-click to edit) ---
                    <span
                        className={`text-lg font-medium cursor-pointer block ${
                            todo.completed ? 'text-gray-500 line-through' : 'text-gray-800'
                        }`}
                        onDoubleClick={() => handleToggle(todo.id)}
                        onClick={() => startEditing(todo)}
                    >
                        {todo.text}
                    </span>
                  )}
                </div>

                {/* Delete Button (Text) */}
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-sm cursor-pointer bg-red-100 px-2 py-1 rounded-md font-semibold text-red-600 hover:text-red-800 transition focus:outline-none ml-4 flex-shrink-0"
                  title="Delete"
                >
                  Delete
                </button>
                
              </div>
            ))
          }
            <p className="text-gray-500 text-center text-xs pt-6">Single Click to edit the todos and Double Click to change the completed status</p>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todos;
