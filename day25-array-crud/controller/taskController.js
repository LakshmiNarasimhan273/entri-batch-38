const taskModel = require("../model/taskModel");

// GET API
const getallTasks = (req, res) => {
    res.status(200).json(taskModel);
}

// GET BY ID
const getTask = (req, res) => {
    const id = parseInt(req.params.id);
    const task = taskModel.find(existingData => existingData.id === id);
    if(task){
        res.status(200).json(task);
    }else{
        res.status(404).json({message: "Task not found"});
    }
}

// POST Task
const createTask = (req, res) => {
    const {title, status} = req.body;

    if(!title || !status){
        return res.status(400).json({ message: "All fields are required" });
    }
    const newTask = {
        id: taskModel.length ? taskModel[taskModel.length - 1].id + 1 : 1,
        title,
        status
    };
    taskModel.push(newTask);
    res.status(201).json(newTask);
}

// PUT TASK
const updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    const {title, status} = req.body;
    const task = taskModel.find(existingData => existingData.id === id);

    if(task){
        task.title = title ?? task.title;
        task.status = status ?? task.status;
        res.status(200).json(task);
    }else{
        res.status(404).json({message: 'Task not found'});
    }
}

// DELETE TASK
const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    const task = taskModel.findIndex(existingData => existingData.id === id);

    if(task !== -1){
        const deletedTask = taskModel.splice(task, 1);
        res.status(200).json(deletedTask[0]);
    }else{
        res.status(404).json({message: "Task not found"});
    }
}

module.exports = {getallTasks, getTask, createTask, updateTask, deleteTask};

// taskModel.length - 1 == 2
// newTask = 3