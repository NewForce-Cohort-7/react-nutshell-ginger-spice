import { useEffect, useState } from "react"
import { Tasks } from "./Tasks"
import { useNavigate } from "react-router-dom"
import { FetchListOfTasks } from "../APIManager/TasksManager"

//Need to do:
//have tasks displayed--DONE
//form for creating tasks--DONE
//only the specific user should see their tasks--DONE
//date to be completed option in form--DONE
//if checked task is marked as complete in the database
//prevent completed task from being displayed in the list

export const Tasklist = () => {
    const [tasks, setTasks] = useState([])
    const [filteredTasks, setFiltered] = useState([])
    const [ticketObject, setTicketObject] = useState({
        completed: false
    }
        )

const handleCheckedTask = () => {
    
}


//     const handleCompletedTask = (event) => {
//         event.preventDefault()
//         const updatedTask = {
//             ...tasks,
//             completed: true
//         }

//         return fetch(`http://localhost:8088/tasks/${ticketObject.id}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(updatedTask)
//         })
//             .then(response => response.json())
//             .then(() => {


//     })
// }


    const navigate = useNavigate()

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)


useEffect(
   () => {
    FetchListOfTasks()
    .then((tasksArray) => {
        setTasks(tasksArray)
    })},
[]
)

useEffect(
    () => {
     FetchListOfTasks()
     .then((ticketObjectArray) => {
         setTicketObject(ticketObjectArray)
     })},
 []
 )

//Filters the tasks and displays the ones for that user
useEffect(
    () => {
        const personalTasks = tasks.filter(task => task.userId === nutshellUserObject.id)
            setFiltered(personalTasks)
    },
    [tasks]
)

    return(
    <article className="task-list">
        <button onClick={() => navigate("/tasks/create")}>Create Task</button>
        {
            filteredTasks.map((task) => {
                return < Tasks key={task.id} task={task} />

            })
        }
           
    </article>
    )
    
}