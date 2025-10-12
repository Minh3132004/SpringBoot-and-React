import Task from "../model/Task";
import React, {JSX} from "react";

interface TaskProperties{
    task: Task;
    onDelete: (id: number) => void;
}


const TaskComponent : React.FC<TaskProperties> = ({task , onDelete}) =>{

    const DeleteTask = () => {
        onDelete(task.id);
    }

    return (
        <tr>
            <td>{task.id}</td>
            <td>{task.text}</td>
            <td><button onClick={DeleteTask}>Delete</button></td>
        </tr>
    );
}

// function TaskComponent( props : TaskProperties): JSX.Element {
//     return (
//         <div>
//             <h3>{props.task.id}</h3>
//             <p>{props.task.text}</p>
//         </div>
//     );
// }

//
// const TaskComponent = ({task}: TaskProperties): JSX.Element => (
//     <div>
//         <h3>{task.id}</h3>
//         <p>{task.text}</p>
//     </div>
// );
//


export default TaskComponent;