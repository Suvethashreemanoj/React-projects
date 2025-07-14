import React, { useState } from "react";
function ToDo(){
    const [tasks, setTasks] = useState(["eat", "sleep", "grind"]); 
    const[newTask, setNewTask] = useState("");

    const handleInputChange = (e) =>{
        setNewTask(e.target.value);
    }

    const addTask = () =>{
        if(newTask.trim() === "") return;
        else{
                setTasks([...tasks, newTask]);
                setNewTask("");
            }
    }

    const deleteTask = (index) =>{
        const updatedTask = tasks.filter((__, i) => i!== index);
        setTasks(updatedTask);
    }

    const moveTaskUp =(index) =>{
        if(index>0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1]] = 
            [updatedTask[index-1], updatedTask[index]];
            setTasks(updatedTask);
        }

    }

    const moveTaskDown =(index) =>{
        if(index < tasks.length - 1){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index+1]] =
            [updatedTask[index+1],updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    return (
        <div className="todolist">
            <h1>TO-DO LIST</h1>
            <input 
            type="text"
            placeholder="Enter a task..."
            value ={newTask}
            onChange={handleInputChange}
            className="task-input"
            />
            <button 
            className="add-task-btn"
            onClick={addTask}>
                Add task
            </button>
            <ol className="task-list">
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="tasks">{task}</span>
                        <div className="button-group">
                            <button 
                            className="delete-btn"
                            onClick={()=> deleteTask(index)}>
                                Delete
                            </button>
                            <button 
                            className="delete-btn"
                            onClick={()=> moveTaskUp(index)}>
                                👆
                            </button>
                            <button 
                            className="delete-btn"
                            onClick={()=> moveTaskDown(index)}>
                                👇
                            </button>
                        </div>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDo;
