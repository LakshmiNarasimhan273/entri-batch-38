import React, { useEffect, useState } from 'react'
import axios from "axios";

const API = "http://localhost:5000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
    isCompleted: false
  });

  // handleInput

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask({ ...task, [name]: type === "checkbox" ? checked : value });
  }

  const clearForm = () => {
    setTask({
      id: "",
      title: "",
      description: "",
      assignedTo: "",
      dueDate: "",
      isCompleted: false
    })
  }

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    axios.get(API).then((res) => setTasks(res.data));
  }

  // Add/Update Function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      // update logic
      axios.put(`${API}/${task.id}`, task).then(() => {
        alert("Task Updated");
        getTasks();
        clearForm();
      })
    } else {
      // create
      const newTask = { ...task };
      delete newTask.id;
      axios.post(API, newTask).then(() => {
        getTasks();
        clearForm();
      })
    }
  }

  const updateTask = (data) => {
      setTask(data);
  }

  const deleteTask = (id) => {
    axios.delete(`${API}/${id}`).then(() => {
      alert("Task Deleted");
      getTasks();
    })
  }

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h1 className='text-2xl font-bold text-center mb-6'>Task Management App</h1>

      <form onSubmit={handleSubmit} className='bg-white p-4 rounded shadow-md max-w-md'>
        <label className='font-semibold mb-2'>Task Title</label>
        <input name='title' value={task.title} onChange={handleChange} type="text" className='border p-2 w-full mb-2' />
        <label className='font-semibold mb-2'>Task Description</label>
        <textarea name="description" value={task.description} onChange={handleChange} className='border p-2 w-full mb-2'></textarea>
        <label className='font-semibold mb-2'>Assigned To</label>
        <input name='assignedTo' value={task.assignedTo} onChange={handleChange} type="text" className='border p-2 w-full mb-2' />
        <label className='font-semibold mb-2'>Due Date</label>
        <input type="date" name='dueDate' value={task.dueDate} onChange={handleChange} className='border p-2 w-full mb-2' />
        <label className='block mb-3'>
          <input type="checkbox" name='isCompleted' checked={task.isCompleted} onChange={handleChange} className='mr-2' />Completed
        </label>

        <button className='bg-blue-500 text-white px-4 py-2 rounded mr-2 w-full'>
          {task.id ? "Update Task" : "Add Task"}
        </button>
      </form>
      <div className='mt-6 max-w-2xl mx-auto'>
        {
          tasks.length === 0 ? (
            <p className='text-center text-gray-500'>No Tasks Added</p>
          ) : (
            tasks.map(data => (
              <div className='bg-white p-4 mb-2 rounded shadow flex justify-between' key={data.id}>
                  <div>
                    <h2 className='flex items-center gap-4 font-semibold text-lg'>{data.title}
                      {
                        data.isCompleted && (
                          <span className='text-green-500 text-xs'>(Done)</span>
                        )
                      }
                    </h2>
                    <p>{data.description}</p>
                    <p className='text-sm text-gray-500'>{data.assignedTo} - {data.dueDate}</p>
                  </div>

                  <div className='space-x-2'>
                    <button className='bg-blue-300 text-black font-semibold px-2 py-1 rounded' onClick={() => updateTask(data)}>Edit</button>
                    <button className='bg-red-300 text-black font-semibold px-2 py-1 rounded ' onClick={() => deleteTask(data.id)}>Delete</button>
                  </div>
              </div>
            ))
          )
        }
      </div>
    </div>
  )
}

export default App