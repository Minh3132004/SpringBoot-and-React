import Task from "../model/Task";
import TaskComponent from "./TaskComponent";
import React, {useState} from "react";

const TaskList : React.FC = () => {
    //useState
    const [tasks, setTasks] = useState<Task[]>([]);
    const [inputText , setInputText] = useState<string>("");
    const addTask = () => {
        if(inputText.trim() !== ""){
            const newTask = new Task(tasks.length + 1, inputText.trim());
            setTasks([...tasks, newTask]);
            setInputText("");
        }

    }
    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    }
    return (
        <div className="container">
            <input className="form-control" type="text" placeholder={"Enter task"} value={inputText} onChange={(e) => setInputText(e.target.value)}/>
            <button className="btn btn-success mt-2" onClick = {addTask}>Add Task</button>
            <table className="table table-striped">
                <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>TASK</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((task)=>(
                    <TaskComponent key={task.id} task={task} onDelete={deleteTask}/>
                ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default TaskList;