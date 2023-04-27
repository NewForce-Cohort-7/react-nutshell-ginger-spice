import { useEffect, useState } from "react"
import { Tasks } from "./Tasks"
import { useNavigate } from "react-router-dom"
import { GetListOfTasks } from "../APIManager/TasksManager"

export const TaskList = ({tacos, updateTasks}) => {
    // const [tasks, setTasks] = useState([])
    const [filteredTasks, setFiltered] = useState([])


    const navigate = useNavigate()

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

//Filters the tasks and displays the ones for that user
useEffect(
    () => {
        const personalTasks = tacos.filter(task => task.userId === nutshellUserObject.id && task.completed === false)
            setFiltered(personalTasks)
    },
    [tacos]
)

    return(
    <article className="task-list">
        <h2>To Do List</h2>
        <button onClick={() => navigate("/tasks/create")}>Create Task</button>
        {
            filteredTasks.map((task) => {
                return < Tasks key={task.id} task={task} updateTasks={updateTasks}/>

            })
        }
           
    </article>
    )
    
}