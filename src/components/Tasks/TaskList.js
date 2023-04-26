import { useEffect, useState } from "react"
import { Tasks } from "./Tasks"
import { useNavigate } from "react-router-dom"
import { GetListOfTasks } from "../APIManager/TasksManager"

export const Tasklist = () => {
    const [tasks, setTasks] = useState([])
    const [filteredTasks, setFiltered] = useState([])

    const navigate = useNavigate()

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)


useEffect(
   () => {
    GetListOfTasks()
    .then((tasksArray) => {
        setTasks(tasksArray)
    })},
[]
)


//Filters the tasks and displays the ones for that user
useEffect(
    () => {
        const personalTasks = tasks.filter(task => task.userId === nutshellUserObject.id && task.completed === false)
            setFiltered(personalTasks)
    },
    [tasks]
)

    return(
    <article className="task-list">
        <h2>To Do List</h2>
        <button onClick={() => navigate("/tasks/create")}>Create Task</button>
        {
            filteredTasks.map((task) => {
                return < Tasks key={task.id} task={task}/>

            })
        }
           
    </article>
    )
    
}